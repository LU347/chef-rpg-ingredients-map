import React, { useState } from 'react';
import locations from './locations.json';
import icon from './assets/map-icons/map-pin.svg';

const Map = () => {
    const [markerLocations] = useState(locations);
    let [onHover, setHover] = useState(false);

    const handleMarkerClick = (location) => {
        alert(`Marker clicked at ${location.x}% width and ${location.y}% height`);
    };

    let handleMouseOver = () => {
        if (!onHover) {

        }
    };
    
    const getMarkerColor = (type) => {
        switch (type) {
            case 'fruit':
                return '#ff5786'; //pink
            case 'vegetable':
                return '#57ff6a';  //green
            case 'seafood':
                return '#619efa'; //blue
            case 'honey':
                return '#f9ff57';                  //yellow
            case 'store':
                return 'red'  //red
            default:
                return 'none';
        }
    }

    //TODO: Marker Color should depend on type of item
    return (
        <div id="map-grid">
            { markerLocations.map((location, index) => (
                <div
                    key={index}
                    className="marker"
                    style={{  
                        ...styles.marker,                 
                        left: `${location.x}%`,
                        top: `${location.y}%`,
                    }}
                    onClick={() => handleMarkerClick(location)}
                >
                    <div>
                    {location.label}
                    <svg 
                        width="25px" 
                        height="25px" 
                        viewBox="0 0 16 16" 
                        fill={getMarkerColor(location.type)} 
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"/>
                    </svg>
                    </div>
                </div>
            ))}
        </div>
    );
}

const styles = {
    mapGrid: {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        border: '1px solid black',
        zIndex: '2',
        backgroundColor: '#f0f0f0'  // Optional background color
    },
    marker: {
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        padding: '3px',
        borderRadius: '50%',
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: '14px',
        width: '25px',
        height: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'transform 0.2s ease'
    },
    markerHover: {
        transform: 'translate(-50%, -50%) scale(1.2)', // Makes the marker 20% bigger on hover
    }
};

export default Map;