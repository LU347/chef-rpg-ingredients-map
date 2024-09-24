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
                    {itemTypes.map(item => (
                        <div key={item.name}>
                            <input type="checkbox" id={item.name} value={item.name}></input>
                            <label htmlFor={item.name}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</label>
                        </div>
                    ))}
                </div>
                <h3>Ingredients</h3>
                <button>Hide all</button>
                <div className="ingredients-container">
                    {itemData.map(item => (
                        item.type !== "building" ?
                            (
                                <div key={item.id}>
                                    <input type="checkbox" id={item.name} value={item.name}></input>
                                    <label htmlFor={item.name}>{item.name}</label>
                                </div>
                            ) : null
                    ))}
                </div>
                <h3>Buildings</h3>
                <div className="buildings-container">
                    {itemData.map(item => (
                        item.type === "building" ?
                            (
                                <div key={item.id}>
                                    <input type="checkbox" id={item.name} value={item.name}></input>
                                    <label htmlFor={item.name}>{item.name}</label>
                                </div>
                            ) : null
                    ))}
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