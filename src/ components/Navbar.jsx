import React from 'react';
import './Navbar.css';
    function Navbar() {
      return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-black border-bottom border-bottom-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="images/moovie-high-resolution-color-logo.svg"
                alt="Logo"
                className="d-inline-block align-text-top nav-img"
                width={250}
                height={100}
              />
            </a>
            <div className=" flex align-items-end ms-auto">
              <form className="  flex ms-1" role="search">
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
              <div className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  My List
                </a>
                <a className="nav-link" href="#">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </nav>
      );
    }
    
    export default Navbar;
    
