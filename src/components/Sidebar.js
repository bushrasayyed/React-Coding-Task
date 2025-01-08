import React, { useState } from "react";
import "./Sidebar.css"; 
import logo from "../assets/Logo.png"; 
import supportImage from "../assets/support.jpg"; 
import { FaTachometerAlt, FaBox, FaCalendarAlt, FaPlane, FaUsers, FaComment  } from "react-icons/fa"; 

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null); 

  const handleItemClick = (item) => {
    setActiveItem(item); 
  };

  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="menu-section">
        <ul className="nav-options">
          <li
            className={`nav-item ${activeItem === "Dashboard" ? "active" : ""}`}
            onClick={() => handleItemClick("Dashboard")}
          >
            <FaTachometerAlt className="nav-icon" /> 
            Dashboard
          </li>
          <li
            className={`nav-item ${activeItem === "Menu1" ? "active" : ""}`}
            onClick={() => handleItemClick("Menu1")}
          >
            <FaBox className="nav-icon" /> 
            Menu1
          </li>
          <li
            className={`nav-item ${activeItem === "Menu2" ? "active" : ""}`}
            onClick={() => handleItemClick("Menu2")}
          >
            <FaCalendarAlt className="nav-icon" /> 
            Menu2
          </li>
          <li
            className={`nav-item ${activeItem === "Menu3" ? "active" : ""}`}
            onClick={() => handleItemClick("Menu3")}
          >
            <FaPlane className="nav-icon" /> 
            Menu3
          </li>
          <li
            className={`nav-item ${activeItem === "Admin Panel" ? "active" : ""}`}
            onClick={() => handleItemClick("Admin Panel")}
          >
            <FaUsers className="nav-icon" /> 
            Admin Panel
          </li>
        </ul>
      </div>

      <div className="support-section">
        <img src={supportImage} alt="Support" className="support-photo" />
        <button className="support-button">
          <FaComment className="support-icon" /> 
          Support
        </button>      </div>
    </div>
  );
};

export default Sidebar;
