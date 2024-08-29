import React, { useState } from 'react';
import './Sidebar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
        <li><Link to="/product-details">Product Details</Link></li>
        <li><Link to="/product-compare">Products Compare</Link></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default Sidebar;
