import React from "react";

import { Link } from "react-router-dom";

import styles from './NavBar.module.css';

const NavBar = props => (
  <nav className="navbar">
    <ul className="navbar__items">
      <li className="navbar__item">
        <Link to="/" className="navbar__link">
          Home
        </Link>
      </li>
      <li className="navbar__item">
        <Link to="/lessons" className="navbar__link">
          Lessons
        </Link>
      </li>
      <li className="navbar__item">
        <Link to="/support" className="navbar__link">
          Support
        </Link>
      </li>
    </ul>

    <Link to="/user" className="btn navbar__your-lessons">
      Your Lessons
    </Link>
  </nav>
);

export default NavBar;
