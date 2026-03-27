import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

  const navigate = useNavigate();   

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

    navigate("/");

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
                name="username"
                value={user.username}
                onChange={onInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={user.name}
                onChange={onInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email}
                onChange={onInputChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>

          </form>

        </div>
      </div>

    </div>
  )
}

export default AddUser