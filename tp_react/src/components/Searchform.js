

import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css'; // Import the CSS file for styling

const SearchForm = () => {
  const [query1, setQuery1] = useState('');
  const [query2, setQuery2] = useState('');
  const [query3, setQuery3] = useState('');
  const [query4, setQuery4] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange1 = (event1) => {
    setQuery1(event1.target.value);
  };

  const handleSearchChange2 = (event2) => {
    setQuery2(event2.target.value);
  };

  const handleSearchChange3 = (event3) => {
    setQuery3(event3.target.value);
  };

  const handleSearchChange4 = (event4) => {
    setQuery4(event4.target.value);
  };

  const clearSearchResults = () => {
    setSearchResults([]);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    if (query1 || query2 || query3 || query4) {
      try {
        const requests = [];

        if (query1) {
          requests.push(axios.get('http://localhost:8000/tp_employee/searchall', {
            params: { search: query1 }
          }));
        }

        if (query2) {
          requests.push(axios.get('http://localhost:8000/tp_employee/searchbyName', {
            params: { search: query2 }
          }));
        }

        if (query3) {
          requests.push(axios.get('http://localhost:8000/tp_employee/searchbyId', {
            params: { search: query3 }
          }));
        }

        if (query4) {
          requests.push(axios.get('http://localhost:8000/tp_employee/searchbyDesg', {
            params: { search: query4 }
          }));
        }

        const responses = await Promise.all(requests);
        const combinedResults = responses.flatMap((response) => response.data);
        const uniqueResults = removeDuplicates(combinedResults, 'emp_id');

        setSearchResults(uniqueResults);
 
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      clearSearchResults();
      console.log('All search boxes are empty');
    }
  };
  const removeDuplicates = (arr, uniqueProp) => {
    const uniqueMap = new Map();
    arr.forEach((item) => {
      const uniqueKey = item[uniqueProp];
      if (!uniqueMap.has(uniqueKey)) {
        uniqueMap.set(uniqueKey, item);
      }
    });
    return Array.from(uniqueMap.values());
  };
  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearchSubmit}>
        {/* Your search input fields */}
        {/* ... */}
        <input
        type="text"
        
        placeholder="Search"
        value={query1}
        onChange={handleSearchChange1}
      />
      <br>
      </br>
     
      <input
        type="text"
        id="Name" placeholder="Search by Name"
        value={query2}
        onChange={handleSearchChange2}
      />
      <br></br>
        <input
        type="text"
        
        placeholder="Search by ID"
        value={query3}
        onChange={handleSearchChange3}
      />
      <br></br>
     
        <input
        type="text"
      
        placeholder="Search by Desg"
        value={query4}
        onChange={handleSearchChange4}
      />
      <br></br>


        <button type="submit">Submit</button>
      </form>

      {searchResults.length > 0 && (
        <div>
          <table className="container">
            <thead>
              <tr>
                <th>Name</th>
                <th>EmployeeID</th>
                <th>Mail id</th>
                <th>Designation</th>
                <th>Date of Joining</th>
                <th>Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((employee) => (
                <tr key={employee.id} className="employee-item">
                  <td>{employee.emp_name}</td>
                  <td>{employee.emp_id}</td>
                  <td>{employee.emp_mail}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.doj}</td>
                  <td>{employee.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
