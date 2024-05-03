import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeUpload.css'; // Import the CSS file for styling

const EmployeeUpload = () => {
  const [file, setFile] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch the list of employees from the API
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8000/tp_employee/');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleEmployeeSelect = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const handleFileUpload = async () => {
    if (!file || !selectedEmployee) {
      alert('Please select an employee and a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('doc', file);
    formData.append('emp', selectedEmployee);

    try {
      await axios.post(
        'http://localhost:8000/tp_employee/upload/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert('File uploaded successfully!');
      setFile(null);
      setSelectedEmployee('');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="employee-upload-container">
      <form>
        <div className="form-group">
          <label htmlFor="selectEmployee">Select Employee:</label>
          <select
            id="selectEmployee"
            value={selectedEmployee}
            onChange={handleEmployeeSelect}
          >
            <option value="">Select an Employee</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.emp_name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fileInput">Upload File:</label>
          <input
            type="file"
            id="fileInput"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
        </div>
        <button type="button" onClick={handleFileUpload} className='centre'>
          Upload
        </button>
      </form>
    </div>
  );
};

export default EmployeeUpload;
