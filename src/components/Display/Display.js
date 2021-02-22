import React from 'react'
import './Display.css';

const Display = ({ filteredStations }) => {
    return (
        filteredStations.map(station => (
            <div key={station.id} className="container">
                <div className="stations" >
                    <h2>{station.stationName}</h2>
                    <p>Miasto: <strong>{station.city.name}</strong></p>
                    <p>Ulica: <strong>{station.addressStreet}</strong></p>
                </div>
            </div>
        ))
    );
}


export default Display;