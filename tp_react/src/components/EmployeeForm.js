import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeForm.css'; // Import the CSS file for styling

const EmployeeForm = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
  const [formData, setFormData] = useState({
    emp_name: '',
    emp_id: '',
    emp_mail: '',
    designation: '',
    doj: '',
    dob: '',
    doc: null,
  });
  const [selectedAction, setSelectedAction] = useState('add');

  // Fetch list of employees from the API
  useEffect(() => {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // const handleDeleteEmployee = async () => {
  //   if (!selectedEmployeeId) {
  //     alert('Please select an employee to delete.');
  //     return;
  //   }

  //   try {
  //     // Send DELETE request to delete the selected employee
  //     await axios.delete(`http://localhost:8000/tp_employee/${selectedEmployeeId}/`);
  //     alert('Employee deleted successfully!');
  //     // Refresh the list of employees after successful deletion
  //     const response = await axios.get('http://localhost:8000/tp_employee/');
  //     setEmployees(response.data);
  //     // Clear the form after successful deletion
  //     setFormData({
  //       emp_name: '',
  //       emp_id: '',
  //       designation: '',
  //       doj: '',
  //       dob: '',
  //       doc: null,
  //     });
  //     setSelectedEmployeeId('');
  //   } catch (error) {
  //     console.error('Error deleting employee:', error);
  //   }
  // };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    // Check the selected action from the dropdown
    const selectedAction = document.getElementById('employeeAction').value;
    const requestData = {
      ...formData,
      id: selectedEmployeeId,
    };
  
    if (selectedAction === 'add') {
      // If "Add Employee" is selected, create a new employee via POST request
      try {
        await axios.post('http://localhost:8000/tp_employee/', requestData);
        alert('New employee added successfully!');
        // Refresh the list of employees after successful addition
        const response = await axios.get('http://localhost:8000/tp_employee/');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error adding new employee:', error);
      }
    } else if (selectedAction === 'delete') {
      // If "Delete Employee" is selected, delete the selected employee via DELETE request
      if (!selectedEmployeeId) {
        alert('Please select an employee to delete.');
        return;
      }
  
      try {
        await axios.delete(`http://localhost:8000/tp_employee/${selectedEmployeeId}/`);
        alert('Employee deleted successfully!');
        // Refresh the list of employees after successful deletion
        const response = await axios.get('http://localhost:8000/tp_employee/');
        setEmployees(response.data);
        // Clear the form after successful deletion
        setFormData({
          emp_name: '',
          emp_id: '',
          emp_mail: '',
          designation: '',
          doj: '',
          dob: '',
          doc: null,
        });
        setSelectedEmployeeId('');
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    } else if (selectedAction === 'update') {
      try {
        await axios.put(`http://localhost:8000/tp_employee/${selectedEmployeeId}/`, requestData);
        alert('Employee updated successfully!');
        // Refresh the list of employees after successful update
        const response = await axios.get('http://localhost:8000/tp_employee/');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error updating employee:', error);
      }
      // ... (existing code for updating an employee)
    } else {
      // If no action is selected, display an error message
      alert('Please select an action from the dropdown.');
    }
  };

  const handleEmployeeSelect = (event) => {
    const selectedId = event.target.value;
    setSelectedEmployeeId(selectedId);

    // Find the selected employee by ID from the employees list
    const selectedEmployee = employees.find((employee) => employee.id === parseInt(selectedId));

    // If an employee is selected, autofill the form with existing details
    if (selectedEmployee) {
      setFormData({
        emp_name: selectedEmployee.emp_name,
        emp_id: selectedEmployee.emp_id,
        emp_mail:selectedEmployee.emp_mail ,
        designation: selectedEmployee.designation,
        doj: selectedEmployee.doj,
        dob: selectedEmployee.dob,
        doc: selectedEmployee.doc,
      });
    } else {
      // If no employee is selected, clear the form
      setFormData({
        emp_name: '',
        emp_id: '',
        emp_mail:'',
        designation: '',
        doj: '',
        dob: '',
        doc: null,
      });
    }
  };

  return (
    <div className="employee-form-container">
      <video src='4k0123_preview.mp4' autoPlay loop muted />
      <form onSubmit={handleFormSubmit}>

        {selectedAction === 'update' && (
          <div className="form-group">
            <label htmlFor="selectEmployee">Select Employee:</label>
            <select
              id="selectEmployee"
              name="selectedEmployeeId"
              value={selectedEmployeeId}
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
        )}
                {selectedAction === 'delete' && (
          <div className="form-group">
            <label htmlFor="selectEmployee">Select Employee:</label>
            <select
              id="selectEmployee"
              name="selectedEmployeeId"
              value={selectedEmployeeId}
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
        )}
        {/* Other input fields */}
        <div className="form-group">
        <b>Name</b>
          <input
            type="text"
            id="emp_name"
            name="emp_name"
            value={formData.emp_name}
            onChange={handleInputChange}
            // placeholder="Enter Employee Name"
          />
        </div>
        <div className="form-group">
        <b> Employee ID</b>
          <input
            type="text"
            id="emp_id"
            name="emp_id"
            value={formData.emp_id}
            onChange={handleInputChange}
            // placeholder="Enter Employee ID"
          />
        </div>
        <div className="form-group">
        <b>Email</b>
          <input
            type="text"
            id="emp_mail"
            name="emp_mail"
            value={formData.emp_mail}
            onChange={handleInputChange}
            // placeholder="Enter Employee ID"
          />
        </div>
        <div className="form-group">
        <b>Designation</b>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            // placeholder="Enter Designation"
          />
        </div>
        <div className="form-group">
        <b>Date of Joining</b>
          <input
            type="date"
            id="doj"
            name="doj"
            value={formData.doj}
            onChange={handleInputChange}
          />
        </div>
        <b>Date of Birth</b>
        <div className="form-group">
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more input fields as needed */}
        <div className="form-group">
          <select
            id="employeeAction"
            name="employeeAction"
            value={selectedAction}
            onChange={(e) => setSelectedAction(e.target.value)}
          >
            <option value="add">Add</option>
            <option value="delete">Delete</option>
            <option value="update">Update</option>
          </select>
        </div>
        <div className="form-buttons">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
