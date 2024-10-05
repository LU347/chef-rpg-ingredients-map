import React, { useState, useRef } from "react";
import sidebarOpenIcon from './assets/chevron_backward.svg';
import sidebarClosedIcon from './assets/chevron_forward.svg';
import "./Sidebar.css";

const Sidebar = ({ onSearch }) => {
    const [isOpen, toggleSidebar] = useState(true);
    const ref = useRef();

    const handleToggle = () => {
        if (isOpen) {
            ref.current.style.transform = "translateX(450px)";
        } else {
            ref.current.style.transform = "translateX(0px)";
        }
        toggleSidebar(!isOpen);
    };

    const handleSearchInputChange = (event) => {
        onSearch(event.target.value); // Pass the search term to the parent component
    };

    /* TODO: Switch Icons depending on sidebar status */
    return (
        <div 
            ref={ref} 
            id="sidebar" 
            className={`sidebar ${isOpen ? "open" : "closed"}`}
        >
            <button id="sidebarButton" onClick={handleToggle}>
                <img src={sidebarClosedIcon} alt="Close Sidebar" />
            </button>
            <div className="menu">
                { /*
                <h2>Season</h2>
                <select>
                    <option>Spring</option>
                    <option>Summer</option>
                    <option>Fall</option>
                    <option>Winter</option>
                </select>
                */}
                <h2>Search</h2>
                <hr />
                <input 
                    type="text" 
                    placeholder="Search Ingredient" 
                    onChange={handleSearchInputChange} // Call the function on input change
                />
                {/* 
                Additional sidebar content 
                <h3>Types</h3>
                */}
            </div>
        </div>
    );
}

export default Sidebar;
