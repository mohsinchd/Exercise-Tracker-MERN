import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            Exercise Tracker
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Exercises
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create">
                  Create Exercise Log
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user">
                  Create User
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
