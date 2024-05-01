import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainNavBar from './main/MainNavBar';
import AdminNavBar from './admin/AdminNavBar';
import './config'

export default function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    const userLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';
    
    setIsAdminLoggedIn(adminLoggedIn);
    setIsUserLoggedIn(userLoggedIn);
  }, []);

  const handleAdminLogin = () => {
    localStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
  };

  const handleUserLogin = () => {
    localStorage.setItem('isUserLoggedIn', 'true');
    setIsUserLoggedIn(true);
  };

  const handleUserLogout = () => {
    localStorage.removeItem('isUserLoggedIn');
    setIsUserLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        )  : isUserLoggedIn ? (
          <MainNavBar onUserLogin={handleUserLogin} onUserLogout={handleUserLogout} />
        ):(
          <MainNavBar onAdminLogin={handleAdminLogin} onUserLogin={handleUserLogin} />
        )}
      </Router>
    </div>
  );
}
