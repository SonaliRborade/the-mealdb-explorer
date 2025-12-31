import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">TheMealDB Explorer</h2>
      <ul className="nav-links">
        <li><Link to="/">Search</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/random">Random Meal</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
