import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
      {/* LEFT SIDE TITLE */}
      <a className="navbar-brand" href="#">
        Fullstack Application
      </a>

      {/* RIGHT SIDE BUTTON */}
      <div className="ml-auto">
        <button className="btn btn-outline-light">
          Add User
        </button>
      </div>

    </nav>
  )
}

export default Navbar