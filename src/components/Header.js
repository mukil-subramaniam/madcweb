// src/components/Header.js
import React from "react";
import './Header.css'; // CSS file for header-specific styles
import logo from '../logo.png'; // Adjust the path to your logo

const Header = () => {
  return (
    <div className="navbar">
      <div className="left-content">
        <img src={logo} alt="Logo" />
        <span>Mobile Application Development</span>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#team">Team</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Header;
