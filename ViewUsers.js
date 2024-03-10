import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../user/User.css'

export default function ViewUser() {
  const [users, setUser] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await axios.get('http://localhost:2032/viewusers');
      setUser(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const deleteUser = async (email) => {
    try {
      await axios.delete(`http://localhost:2032/deleteuser/${email}`);
      fetchUser();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Users</h1> 

      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>

              <th>Email</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(users) && users.length > 0 ? (
    users.map((user, index) => ( 
      <tr key={index}>
        <td>{user.fullname}</td>
        <td>{user.email}</td>
        <td>{user.location}</td>
        <td>{user.contact}</td>
        <td>
          <button onClick={() => deleteUser(user.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}