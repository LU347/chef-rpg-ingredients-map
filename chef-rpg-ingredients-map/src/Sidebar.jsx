import React, { useState } from "react";
import sidebarOpenIcon from './assets/chevron_backward.svg';
import sidebarClosedIcon from './assets/chevron_forward.svg';
import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, toggleSidebar] = useState(false);

    const handleToggle = () => {
        toggleSidebar(!isOpen)
    };

    return (
<div className="sidebar">
            {!isOpen ? (
                <button onClick={handleToggle}><img src={sidebarOpenIcon} alt="Open Sidebar"></img></button>
            ) : (
                <div>
                    <button onClick={handleToggle}><img src={sidebarClosedIcon} alt="Close Sidebar"></img></button> 
                    <p>Sidebar Content</p> 
                </div>
            )}
        </div>
    );
}

export default Sidebar;