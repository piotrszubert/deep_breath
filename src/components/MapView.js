import { marker } from 'leaflet';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function Map({ items, isLoading }) {

  let markers = [];
  
    items.map((item => (
    //  markers.push(`${item.gegrLat}, ${item.gegrLon}`)
    markers.push([item.gegrLat, item.gegrLon, item.city.name])
    // console.log(`${item.gegrLat}, ${item.gegrLon}`)
    )))

 

//console.log(markers);

      markers.map((marker => (
        console.log(marker)
      )))

return isLoading ? (<h1>loading..</h1>) : (

  //return(
  <MapContainer center={[51.775411, 19.450900]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

{
   items.map((item => (
    <Marker position={[item.gegrLat, item.gegrLon]}></Marker>
    )))
}
 
    <Marker position={[51.775411, 19.450900]}>
      <Popup>
        tu jest <i> stacja pomiarowa </i>
      </Popup>
    </Marker>
  </MapContainer>
);
}

export default Map;