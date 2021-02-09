
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function Map({ items, isLoading }) {
  return isLoading ? (<h1>loading..</h1>) : (

    <MapContainer center={[51.775411, 19.450900]} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {
        items.map((item => (
          <Marker key={item.id} position={[item.gegrLat, item.gegrLon]}>
            <Popup>
              <div>
                <h2>{item.stationName}</h2>
                <p>Miasto: <strong>{item.city.name}</strong></p>
                <p>Ulica: <strong>{item.addressStreet}</strong></p>
                <p>{item.id}</p>
              </div>
            </Popup>
          </Marker>
        )))
      }
    </MapContainer>
  );
}

export default Map;