// EmployeeList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EmployeeList.css';
import Papa from 'papaparse'; // Import the CSS file for styling

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8000/tp_employee/');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };
  const handleDownloadCSV = () => {
    const csv = Papa.unparse(employees, {
      header: true,
      skipEmptyLines: true,
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'employee_list.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
    <h2 style={{ textAlign: 'center' }}>Employee List</h2>
    <button style={{hover:"black", position: 'fixed', bottom: '20px', right: '20px', padding: '10px 20px', backgroundColor: '#3333FF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleDownloadCSV}>Export CSV</button>
    <table className="employee-table">
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
        {employees.map((employee) => (
          <tr key={employee.id}>
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
  );
};

export default EmployeeList;
