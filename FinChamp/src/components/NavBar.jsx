import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../compoStyles/NavBar.css';
import useri from "../assets/user.svg";

const NavBar = ({ user }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    // Implement logout logic here (e.g., call an API, redirect)
    console.log('Logout clicked');
  };

  const dropdownContent = (
    <ul className="profile-dropdown">
      <li>
        <NavLink to="/profile">View Profile</NavLink>
      </li>
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logos">
          <img src={logo} alt="FinChamp Logo" />
          <span className="logo-text">FinChamp</span>
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Learning</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Games</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li className="search">
              <input
                id="quick_search"
                className="xs-hide"
                name="quick_search"
                placeholder="Search ..."
                type="text"
              />
            </li>
          </ul>
        </div>
        <div className="user-profile">
          <div onClick={handleProfileDropdown} aria-label="User Profile">
            <img src={useri} alt="User Profile" className="imgP" />
          </div>
          {isProfileDropdownOpen && dropdownContent}
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}></div>
      </div>
    </nav>
  );
};

export default NavBar;

