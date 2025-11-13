import React, { useState, useRef, useEffect } from "react";
import {
  FaUserCircle,
  FaBell,
  FaCog,
  FaUser,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import "../../Styles/AminNav.css";

import profilePic from "../../assets/board1.jpg";

function AdminNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); 

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const handleLogout = () => {
    
    localStorage.clear();

    
    navigate("/");

    
    setDropdownOpen(false);
  };

  return (
    <nav className="adminnav-container">
      <div className="adminnav-left">
        <FaUserCircle className="adminnav-icon" />
        <span className="adminnav-title">ADMIN</span>
      </div>

      <div className="adminnav-center">
        <span className="adminnav-center-text">Welcome to Ysk Infotech</span>
      </div>

      <div className="adminnav-right">
        <FaBell className="adminnav-right-icon" />
        <FaCog className="adminnav-right-icon" />
        <div className="adminnav-profile" ref={dropdownRef}>
          <img
            src={profilePic}
            alt="Profile"
            className="adminnav-profile-img"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="adminnav-dropdown">
              <button className="adminnav-dropdown-item">
                <FaUser className="adminnav-dropdown-icon" /> My Profile
              </button>
              <button className="adminnav-dropdown-item">
                <FaLock className="adminnav-dropdown-icon" /> Change Password
              </button>
              
              <button
                className="adminnav-dropdown-item adminnav-logout"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="adminnav-dropdown-icon" /> Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default AdminNav;
