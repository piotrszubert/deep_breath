import React from 'react';

const City = ({ items, isLodaing}) => {
return isLodaing ? (<h1>loading..</h1>) : (
<div>
    {items.map((item) => (
        <div key={item.id}>
        <h1>{item.city.name}</h1>
        <p>{item.gegrLat}</p>
        <p>{item.gegrLon}</p>
        </div>
    ))}
</div>);

}

export default City;