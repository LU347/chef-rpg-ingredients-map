import React, { useState } from "react";
import { useRef } from "react";

import sidebarOpenIcon from './assets/chevron_backward.svg';
import sidebarClosedIcon from './assets/chevron_forward.svg';
import "./Sidebar.css";

import itemTypes from './lib/itemTypes.json';
import itemData from './lib/itemData.json';

var sidebar = document.getElementById("sidebar");

const Sidebar = () => {
    const [isOpen, toggleSidebar] = useState(true);

    const ref = useRef();

    const handleToggle = () => {
        if (isOpen) {
            ref.current.style.transform = "translateX(450px)";
        } else {
            ref.current.style.transform = "translateX(0px)";
        }
        toggleSidebar(!isOpen)
    };


    return (
        <div ref={ref} id="sidebar" className="sidebar">
            <button id="sidebarButton" onClick={handleToggle}><img src={sidebarClosedIcon} alt="Close Sidebar"></img></button>
            <div className="menu">
                <h2>Season</h2>
                <select>
                    <option>Spring</option>
                    <option>Summer</option>
                    <option>Fall</option>
                    <option>Winter</option>
                </select>
                <hr></hr>
                <input type="text" placeholder="Search Ingredient"></input>
                <h3>Types</h3>
                <div className="types-container">
                    <iinput type="checkbox" value="animal">Animals</iinput>
                    <iinput type="checkbox" value="animalDrop">Animal Drop</iinput>
                    <iinput type="checkbox" value="fruit">Fruits</iinput>
                    <iinput type="checkbox" value="herb">Herbs</iinput>
                    <iinput type="checkbox" value="vegetable">Vegetables</iinput>
                    <iinput type="checkbox" value="seafood">Seafood</iinput>
                </div>
                <h3>Ingredients</h3>
                <button>Hide all</button>
                <div className="ingredients-container">
                </div>
                <h3>Buildings</h3>
                <div className="buildings-container">
                </div>
                <h3>NPCs</h3>
                <h3>Misc</h3>
                <div>
                    <button>Toggle Labels</button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;