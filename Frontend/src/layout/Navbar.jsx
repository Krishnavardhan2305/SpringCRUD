import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      {/* LEFT SIDE TITLE */}
      <Link className="navbar-brand" to="/">
        Fullstack Application
      </Link>

      {/* RIGHT SIDE BUTTON */}
      <div className="ms-auto">
        <Link className="btn btn-outline-light" to="/adduser">
          Add User
        </Link>
      </div>

    </nav>
  )
}

export default Navbar