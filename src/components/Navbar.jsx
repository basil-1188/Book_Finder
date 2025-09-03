import React from 'react'
import { Link } from 'react-router-dom';
import '../css/navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar-brand">
        <Link to="/" className="nav-link">BOOK FINDER</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/favorites" className="nav-link">FAVORITES</Link>           
      </div>
    </nav>
  )
}
