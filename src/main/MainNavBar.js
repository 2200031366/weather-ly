import React from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Maps from './API';
import AboutUs from './AboutUs';
import Feedback from './Feedback';
import Profile from './Profile';
import './navbar.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Cover from './Cover';
import Forecast from './Forecast';
import AdminLogin from '../admin/AdminLogin'; // Import AdminLogin component
import UpdateProfile from './UpdateProfile';
import '../config'

export default function MainNavBar({ onAdminLogin, onUserLogin}) {
  const location = useLocation();
  const navigate = useNavigate();

  // Define routes where navbar should be shown
  const showNavbarRoutes = ["/home", "/maps", "/guide", "/forecast", "/aboutus", "/feedback", "/profile","/updateprofile"];

  // Check if the current location is one of the routes where navbar should be shown
  const shouldShowNavbar = showNavbarRoutes.includes(location.pathname);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isUserLoggedIn')
    navigate('/'); // Redirect to home page
    window.location.reload();
  };

 
  

  return (
    <div>
      {shouldShowNavbar && (
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/maps">API</Link></li>
            <li><Link to="/forecast">Forecast</Link></li>
            <li><Link to="/aboutus">AboutUs</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
            <li className="dropdown">
            <Link>Profile</Link>
            <div className="dropdown-content">
            <Link to="/profile"> View Profile</Link>
            <Link to="/updateprofile">Update Profile</Link>
            </div>
            </li>
            <li><button className="logoutbutton" onClick={handleLogout}>Logout</button></li> 
          </ul>
        </nav>
      )}
      <Routes>
        <Route path="/maps" element={<Maps/>} exact/>
        <Route path="/aboutus" element={<AboutUs/>} exact/>
        <Route path="/feedback" element={<Feedback/>} exact/>
        <Route path="/profile" element={<Profile />} exact/>
        <Route path="/updateprofile" element={<UpdateProfile/>}exact/>
        <Route path="/login" element={<Login onUserLogin={onUserLogin}/>} exact />
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>} exact />
        <Route path="/" element={<Cover />} exact/>
        <Route path="/home" element={<Home />} exact/>
        <Route path="/signup" element={<Signup />} exact/>
        <Route path="/forecast" element={<Forecast />}exact />
      </Routes>
    </div>
  );
}
