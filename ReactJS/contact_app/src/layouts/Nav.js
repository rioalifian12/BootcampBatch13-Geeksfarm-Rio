import React from "react";
import { NavLink } from "react-router";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mx-auto p-3 bg-success-subtle">
      <div className="container">
        <a className="navbar-brand fs-4" href="/">
          Contact App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto fs-5">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
