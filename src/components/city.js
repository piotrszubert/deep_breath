import React from 'react';

const City = ({ items, isLodaing}) => {
return isLodaing ? (<h1>loading..</h1>) : (
<div>
    {items.map((item) => (
        <h1>{item.city.name}</h1>
    ))}
</div>)
}

export default City;