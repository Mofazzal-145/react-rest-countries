import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h2>Countries in another file:{countries.length}</h2>
            {
                countries.map(country => console.log(country))
            }
            {
                
                countries.map(country => <Country 
                    // advanced
                    country={country}
                    name={country.name.common}
                    population={country.population}
                    area={country.area}
                    region={country.region}
                    ></Country>)
            }
        </div>
    );
};

export default Countries;