import React, { useState } from 'react'
import axios from 'axios'

const AddUser = () => {

  const [user, setUser] = useState({
    username: "",
    name: "",
    email: ""
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); 
    await axios.post("http://localhost:8080/user", user);
    alert("User added successfully!");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
          <h2 className="text-center m-4">Add User</h2>
          <form onSubmit={onSubmit}>

            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                name="username"
                value={user.username}
                onChange={onInputChange}
                required
              />
            </div>

            {/* NAME */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                name="name"
                value={user.name}
                onChange={onInputChange}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={user.email}
                onChange={onInputChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            <button type="button" className="btn btn-danger mx-2">
              Cancel
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUser