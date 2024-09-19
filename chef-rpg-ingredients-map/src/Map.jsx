import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mapImage from './assets/game-map.png';

import coordinates from './lib/coordinates.json';
import items  from './lib/itemData.json';

const Map = () => {
    const [map, setMap] = useState(null);
    //const [markerLocations] = useState(locations);
    const [markerLocations] = useState(coordinates);
    const [itemData] = useState(items);

    useEffect(() => {
        // Check if the map already exists, if yes, destroy it
        if (map) {
            map.remove(); // Cleanup the existing map before initializing a new one
        }

        // Initialize the map
        const leafletMap = L.map('leaflet-map', {
            crs: L.CRS.Simple,
            minZoom: 0,
        });

        const bounds = [[0, 0], [1080, 1920]];  // Adjust to the dimensions of your image
        L.imageOverlay(mapImage, bounds).addTo(leafletMap);
        leafletMap.fitBounds(bounds);

        setMap(leafletMap);

        // Cleanup the map on component unmount
        return () => {
            if (leafletMap) {
                leafletMap.remove();
            }
        };
    }, []);

    useEffect(() => {
        if (map) {
            markerLocations.forEach((location) => {
                const itemName = itemData[location["id"]]["name"];
                const itemType = itemData[location["id"]]["type"];
                const marker = L.marker([location.y+5, location.x-8], {
                    icon: L.divIcon({
                        className: 'custom-marker',
                        html: `
                        <div style="background-color:width: auto; height: 25px; border-radius: 50%; display: flex; flex-direction; column; justify-content: center; align-items: center">
                            <div>
                                ${itemName}
                                <svg 
                                    width="25px"
                                    height="25px" 
                                    viewBox="0 0 16 16" 
                                    fill= ${getMarkerColor(itemType)} 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"/>
                                </svg>
                            </div>
                        </div>`,
                    })
                }).addTo(map)
                .bindPopup(`${itemName}: ${location.x} ${location.y}`) //TODO: Add description
            });
        }
    }, [map, markerLocations]);

    const getMarkerColor = (type) => {
        switch (type) {
            case 'fruit':
                return '#ff5786'; // pink
            case 'vegetable':
                return '#57ff6a'; // green
            case 'seafood':
                return '#619efa'; // blue
            case 'building':
                return 'red'; // red
            case 'grass':
                return '#d0fc8d';
            case 'grain':
                return '#fce38d';
            case 'herb':
                return '#8dfc95';
            case 'animal':
                return 'orange'; //temp color
            case 'animal-drop':
                return 'yellow';
            default:
                return 'none';
        }
    };

    return (
        <div id="leaflet-map" style={{ width: '100vw', height: '100vh' }}></div>
    );
};

export default Map;
