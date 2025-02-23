import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">The Batter Story</div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" className="nav-item" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/menu" className="nav-item" onClick={toggleMenu}>Menu</Link></li>
        <li><Link to="/gallery" className="nav-item" onClick={toggleMenu}>Gallery</Link></li>
        <li><Link to="/about" className="nav-item" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/contact" className="nav-item" onClick={toggleMenu}>Contact</Link></li>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default NavBar;