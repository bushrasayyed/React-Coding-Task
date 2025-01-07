import React, { useState } from "react";
import "./Header.css";
import { FaSearch, FaCaretDown, FaUser, FaBell, FaBuilding, FaCog, FaQuestionCircle, FaInfoCircle, FaSignOutAlt } from "react-icons/fa"; 
import profilePic from "../assets/profile.png";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header">
      <div className="header-box">
        <div className="search-box">
          <button className="search-btn">
            <FaSearch className="search-icon" />
          </button>
        </div>

        <div className="profile-box">
          <div className="profile" onClick={toggleDropdown}>
            <img src={profilePic} alt="Evan Yates" className="profile-pic" />
            <span className="profile-name">Evan Yates</span>
            <FaCaretDown className={`caret-icon ${isDropdownOpen ? "open" : ""}`} />
          </div>

          {isDropdownOpen && (
            <div className="profile-dropdown">
              <ul>
                <li>
                  <FaUser className="dropdown-icon" /> Profile
                </li>
                <li>
                  <FaBell className="dropdown-icon" /> Notifications
                </li>
                <li>
                  <FaBuilding className="dropdown-icon" /> Change Firm
                </li>
                <li>
                  <FaCog className="dropdown-icon" /> Settings
                </li>
                <li>
                  <FaQuestionCircle className="dropdown-icon" /> Help/Support
                </li>
                <li>
                  <FaInfoCircle className="dropdown-icon" /> About (Version Info)
                </li>
                <li>
                  <FaSignOutAlt className="dropdown-icon" /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
