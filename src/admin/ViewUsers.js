import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${config.url}/viewusers`);
      setUsers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUsers = async (email) => {
    try {
      await axios.delete(`${config.url}/deleteusers/${email}`);
      fetchUsers();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Users</h1><br/><br></br>
      
      <table style={{ borderCollapse: 'collapse', width: '80%', margin: 'auto', border: '2px solid black', borderRadius: '8px', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#7fb3d5' }}>
            <th style={{ padding: '10px', borderBottom: '1px solid #d6eaf8' }}>Email</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Phone Number</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #d6eaf8' }}>User Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Region</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #d6eaf8' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f2f2f2' }}>
                <td style={{ padding: '10px', borderBottom: '1px solid #d6eaf8' }}>{user.email}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.phonenumber}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #d6eaf8' }}>{user.username}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.region}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #d6eaf8' }}>
                  <button onClick={() => deleteUsers(user.email)} style={{ backgroundColor: '#f44336', color: '#fff', padding: '8px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
