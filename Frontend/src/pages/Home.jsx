import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

  // State to store users
  const [users, setUsers] = useState([]);

  // Runs once when component loads
  useEffect(() => {
    loadUsers();
  }, []);

  // Fetch users from backend
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    
    // Store data in state
    setUsers(result.data);
  };

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">User List</h2>

      <table className="table table-bordered table-hover shadow">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className='btn btn-primary mx-2'>View</button>
                    <button className='btn btn-outline-primary mx-2'>Edit</button>
                    <button className='btn btn-danger mx-2'>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default Home