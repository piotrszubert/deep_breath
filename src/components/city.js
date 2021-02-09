import React from 'react';

const City = ({ stations, isLodaing}) => {
return isLodaing ? (<h1>loading..</h1>) : (
<div>
    {stations.map((station) => (
        <div key={station.id}>
        <h1>{station.city.name}</h1>
        <p>{station.gegrLat}</p>
        <p>{station.gegrLon}</p>
        </div>
    ))}
</div>);

}

export default City;