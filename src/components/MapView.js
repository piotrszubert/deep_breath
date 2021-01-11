import React from 'react';
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

function Map() {
return(
<MapContainer center={[51.775411, 19.450900]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.775411, 19.450900]}>
    <Popup>
    tu jest <i> stacja pomiarowa </i>
    </Popup>
  </Marker>
</MapContainer>
);
}

export default Map;