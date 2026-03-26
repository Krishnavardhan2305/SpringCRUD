import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar'
import Home from './pages/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddUser from './Users/AddUser'

const App = () => {
  return (
    <div>
      <Router>

        {/* Navbar always visible */}
        <Navbar/>

        {/* Routes define which component loads */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App