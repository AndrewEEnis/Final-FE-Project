import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Western Arkansas Hound Rescue
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collape navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink exact to="/dogs" className="nav-link">
                Adoptable Hounds
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/volunteer" className="nav-link">
                Volunteer
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
