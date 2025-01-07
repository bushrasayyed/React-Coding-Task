import React, { useState } from "react";
import "./Sidebar.css"; 
import logo from "../assets/Logo.png"; 
import supportImage from "../assets/support.jpg"; 
import { FaTachometerAlt, FaBox, FaCalendarAlt, FaPlane, FaUsers, FaComment  } from "react-icons/fa"; // Importing icons from react-icons

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null); // To manage active state

  const handleItemClick = (item) => {
    setActiveItem(item); // Set active item
  };

  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Menu Section */}
      <div className="menu-section">
        <ul className="nav-options">
          <li
            className={`nav-item ${activeItem === "Dashboard" ? "active" : ""}`}
            onClick={() => handleItemClick("Dashboard")}
          >
            <FaTachometerAlt className="nav-icon" /> {/* Dashboard Icon */}
            Dashboard
          </li>
          <li
            className={`nav-item ${activeItem === "Menu1" ? "active" : ""}`}
            onClick={() => handleItemClick("Menu1")}
          >
            <FaBox className="nav-icon" /> {/* Menu1 Icon */}
            Menu1
          </li>
          <li
            className={`nav-item ${activeItem === "Menu2" ? "active" : ""}`}
            onClick={() => handleItemClick("Menu2")}
          >
            <FaCalendarAlt className="nav-icon" /> {/* Menu2 Icon */}
            Menu2
          </li>
          <li
            className={`nav-item ${activeItem === "Menu3" ? "active" : ""}`}
            onClick={() => handleItemClick("Menu3")}
          >
            <FaPlane className="nav-icon" /> {/* Menu3 Icon */}
            Menu3
          </li>
          <li
            className={`nav-item ${activeItem === "Admin Panel" ? "active" : ""}`}
            onClick={() => handleItemClick("Admin Panel")}
          >
            <FaUsers className="nav-icon" /> {/* Admin Panel Icon */}
            Admin Panel
          </li>
        </ul>
      </div>

      {/* Support Section */}
      <div className="support-section">
        <img src={supportImage} alt="Support" className="support-photo" />
        <button className="support-button">
          <FaComment className="support-icon" /> {/* Comment Icon */}
          Support
        </button>      </div>
    </div>
  );
};

export default Sidebar;
