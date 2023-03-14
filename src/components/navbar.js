import React from 'react';
import { Link } from 'react-router-dom';

import Button from './shared/formElements/Button';
import '../public/navbar.css';

const Navbar = (props) => {
  return (
    <React.Fragment>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/clinic">Clinic</Link>
              </li>
              {/* <li className="nav-item">
              <Link className="nav-link" to="#">Login</Link>
            </li> */}
            </ul>
            <div>
              <Button className='btn btn-secondary' type="button" onClick={props.onClick}>Login</Button>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
