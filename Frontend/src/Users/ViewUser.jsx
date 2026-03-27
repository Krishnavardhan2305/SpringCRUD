import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const ViewUser = () => {

  // Get ID from URL
  const { id } = useParams();

  // State to store user data
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: ""
  });

  // Load user when component mounts
  useEffect(() => {
    loadUser();
  }, []);

  // Fetch user from backend
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">

      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">

          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id: {user.id}
            </div>

            <ul className="list-group list-group-flush">

              <li className="list-group-item">
                <b>Username:</b> {user.username}
              </li>

              <li className="list-group-item">
                <b>Name:</b> {user.name}
              </li>

              <li className="list-group-item">
                <b>Email:</b> {user.email}
              </li>

            </ul>
          </div>

          {/* Back Button */}
          <Link className="btn btn-primary my-3" to="/">
            Back to Home
          </Link>

        </div>
      </div>

    </div>
  )
}

export default ViewUser