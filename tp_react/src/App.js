import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import EmployeeList from './components/EmployeeList';
import AdminPage from './components/AdminPage';
import EmployeeUpload from './components/EmployeeUpload';
import Navbar from './components/Navbar';
import Aboutusp from './components/pages/Aboutusp';
import Home from './components/pages/Home';
import Orgstructurep from './components/pages/Orgstructurep';
import './App.css';


function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar />

        {/* <nav>
          <ul className="nav-list">
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/search">Employee Search</Link>
            </li>
            <li>
              <Link to="/list">Employee List</Link>
            </li>
            
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/organisation">Organisation</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/list" element={<EmployeeList/>} />
          <Route path="/upload" element={<EmployeeUpload/>} />
          <Route path="/aboutus" element={<Aboutusp/>} />
          <Route path="/organisation" element={< Orgstructurep/>} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;

