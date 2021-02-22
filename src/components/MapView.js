import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = ({ stations, isLoading }) => {
  return isLoading ? (<h1>loading..</h1>) : (

    <MapContainer center={[51.775411, 19.450900]} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {
        stations.map((station => (
          <Marker key={station.id} position={[station.gegrLat, station.gegrLon]}>
            <Popup>
              <div>
                <h2>{station.stationName}</h2>
                <p>Miasto: <strong>{station.city.name}</strong></p>
                <p>Ulica: <strong>{station.addressStreet}</strong></p>
                <p>{station.id}</p>
              </div>
            </Popup>
          </Marker>
        )))
      }
    </MapContainer>
  );
}

export default Map;