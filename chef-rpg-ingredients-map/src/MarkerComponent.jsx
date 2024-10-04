import React, { Prop } from 'react';
import { Marker, Tooltip, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

import icons from './iconMapper.js';

function MarkerComponent(props) {
  
  const getMarkerIcon = (type) => {
      return icons[type];
  }

  return (
    <Marker
        key={props.index} 
        position={props.markerObject.position} 
        icon={
        new Icon({
            iconUrl: getMarkerIcon(props.markerObject.itemType),
            iconSize: [38, 38]
        })
        }>
        <Tooltip permanent={true} direction={'top'} offset={[0, -32]}>{props.markerObject.itemName}</Tooltip>
        <Popup>{props.markerObject.itemName}</Popup>
    </Marker>
  )
}

export default MarkerComponent;