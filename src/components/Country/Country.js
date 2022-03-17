import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h2>country name:{props.name}</h2>
            <p>Population:{props.population}</p>
            <p><small>Area:{props.area}</small></p>
            <p><small>Region:{props.region}</small></p>
        </div>
    );
};

export default Country;