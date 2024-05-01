import React, { useEffect, useState } from 'react';
import './profilepage.css';
import '../config'

export default function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem('user');
    console.log("Stored user data:", storedUserData); // Log stored user data
    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        console.log("Parsed user data:", parsedUserData); // Log parsed user data
        setUserData(parsedUserData);
      } catch (error) {
        console.error("Error parsing user data:", error); // Log parsing errors
        // Handle parsing error gracefully
      }
    }
  }, []);

  return (
    userData ? (
      <div className='container'>
        <h3 align="center">My Profile</h3><br/>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone Number:</strong> {userData.phonenumber}</p>
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Region:</strong> {userData.region}</p>
      </div>
    ) : (
      <p>No User found</p>
    )
  );
}
