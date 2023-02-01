import React from 'react';
import { Link } from 'react-router-dom';
import '../public/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Home</Link>
      <Link to="#" className="navbar-item">About</Link>
      <Link to="/login" className="navbar-item">Login/SignUp</Link>
      <Link to="/clinic" className="navbar-item1">Clinc</Link>
      

    </nav>
  );
}

export default Navbar;
