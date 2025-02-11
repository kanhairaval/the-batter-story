import React from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">The Batter Story</div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/menu" className="nav-item">Menu</Link></li>
        <li><Link to="/gallery" className="nav-item">Gallery</Link></li>
        <li><Link to="/about" className="nav-item">About</Link></li>
        <li><Link to="/contact" className="nav-item">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;