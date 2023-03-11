import React from 'react';
import { Link } from 'react-router-dom';

import Button from './shared/formElements/Button';
import '../public/navbar.css';

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">Home</Link>
        <Link to="#" className="navbar-item">About</Link>
        <div>
          <Button type="button" onClick={props.onClick}>Login</Button>
        </div>
        {/* <Link to="/login" className="navbar-item">Login/SignUp</Link> */}
        <Link to="/clinic" className="navbar-item1">Clinc</Link>
        

      </nav>
    </React.Fragment>
  );
}

export default Navbar;
