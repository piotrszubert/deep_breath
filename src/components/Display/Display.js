import React from 'react'
import './Display.css';

const Display = ({ stations }) => {
    return (
        stations.map(station => (
            <div className="stations" key={station.id}>
                <h2>{station.stationName}</h2>
                <p>Miasto: <strong>{station.city.name}</strong></p>
                <p>Ulica: <strong>{station.addressStreet}</strong></p>
            </div>
        ))
    );
}


export default Display;