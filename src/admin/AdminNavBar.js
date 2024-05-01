import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './admin.css';
import '../config'

import AdminHome from './AdminHome';
import ViewUsers from './ViewUsers';
import AddEvent from './AddEvent';
import ChangeAdminPwd from './ChangeAdminPwd';


export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/');
    window.location.reload();
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/adminhome">Admin Home</Link></li>
          <li><Link to="/viewusers">View Users</Link></li>
          <li><Link to="/createevent">Add Place</Link></li>
          <li><Link to="/changeadminpwd">Change Password</Link></li>
          <li><button className="logoutbutton" onClick={handleLogout}>Logout</button></li> {/* Logout button */}
        </ul>
      </nav>

      <Routes>
        <Route path="/viewusers" element={<ViewUsers />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/createevent" element={<AddEvent />} />
        <Route path='/changeadminpwd' element={<ChangeAdminPwd/>}/>
      </Routes>
    </div>
  );
}
