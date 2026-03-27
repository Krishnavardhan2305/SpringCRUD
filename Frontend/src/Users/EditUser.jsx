import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

  // Hook to navigate between pages
  const navigate = useNavigate();   

  // Get ID from URL (/edituser/:id)
  const { id } = useParams();

  // State to store user data
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: ""
  });

  // Handle input changes
  // → Updates state when user types in form
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Runs when component loads
  useEffect(() => {
    loadUser();
  }, []);

  // Fetch user data from backend
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    
    // Set fetched data into form
    setUser(result.data);
  };

  // Handle form submit
  const onSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    // Send updated data to backend
    await axios.put(`http://localhost:8080/user/${id}`, user);

    // Redirect to home page after update
    navigate("/");
  };

  return (
    <div className="container">

      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">

          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={onSubmit}>

            {/* USERNAME */}
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

            {/* NAME */}
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

            {/* EMAIL */}
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

            {/* SUBMIT BUTTON */}
            <button type="submit" className="btn btn-primary">
              Update User
            </button>

          </form>

        </div>
      </div>

    </div>
  )
}

export default EditUser