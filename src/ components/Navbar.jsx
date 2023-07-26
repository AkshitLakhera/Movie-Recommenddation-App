import React from 'react';
import './Navbar.css';
    function Navbar() {
      return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-black border-bottom border-bottom-dark" data-bs-theme="dark">
        <div className="container-fluid d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <img
              src="images/moovie-high-resolution-color-logo.svg"
              alt="Logo"
              className="d-inline-block align-text-top nav-img"
              width={250}
              height={100}
            />
          </a>
          <form className="d-flex ms-1">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              My List
            </a>
            <a className="nav-link  sign_in" href="#">
              Sign In
            </a>
          </div>
        </div>
      </nav>
    );
    }
    
    export default Navbar;
    
