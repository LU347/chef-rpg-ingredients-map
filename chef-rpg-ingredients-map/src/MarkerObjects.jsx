import React, { useEffect, useState } from "react";
import MarkerComponent from "./MarkerComponent.jsx";

import coordinates from "./lib/coordinates.json";
import items from "./lib/itemData.json";

function MarkerObjects({ filter }) {
    const [itemData] = useState(items);
    const [itemCoordinates] = useState(coordinates);
    const [markerObjects, setMarkerObjects] = useState([]);

    useEffect(() => {
        const newMarkers = coordinates.map((location) => {
            const itemType = itemData[location.id].type;
            const itemName = itemData[location.id].name;

            return {
                position: [location.y, location.x],
                itemName: itemName,
                itemType: itemType,
            };
        });

        setMarkerObjects(newMarkers);
    }, [itemCoordinates, itemData]);

    const filteredMarkers = markerObjects.filter(marker =>
        marker.itemName.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <>
            {filteredMarkers.map((marker, index) => (
                <MarkerComponent key={index} markerObject={marker} />
            ))}
        </>
    );
}

export default MarkerObjects;
