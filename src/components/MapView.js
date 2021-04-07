import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './loader.css'

const Map = ({ stations, isLoading }) => {


const [airQuality, setAirQuality] = useState([]);
const [id, setId] = useState([]);

useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://deepbreath-api.herokuapp.com/stations`)
      setAirQuality(result.data);
    }
    fetchItems();
  
}, [])


console.log(airQuality)

  return isLoading ? (<h1 className="loader">loading..</h1>) : (

    <MapContainer center={[51.775411, 19.450900]} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {
        stations.map((station => (
          <Marker 
          title={station.stationName} 
          key={station.id} 
          position={[station.gegrLat, station.gegrLon]}>
            <Popup>
              <div>
                <h2>{station.stationName}</h2>
                <p>Miasto: <strong>{station.city.name}</strong></p>
                <p>Ulica: <strong>{station.addressStreet}</strong></p>
                <p><a target="_blank" rel="noreferrer" href={`https://deepbreath-api.herokuapp.com/station/${station.id}`}>data</a></p>
              </div>
            </Popup>
          </Marker>
        )))
      }
    </MapContainer>
  );
}

export default Map;