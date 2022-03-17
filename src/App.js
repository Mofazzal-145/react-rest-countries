import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Person/Person';
import Header from './components/Header/Header';

// ex: 02
function App() {
  return(
    <div className='App'>
      <Header></Header>
      <Countries></Countries>
      <Person></Person>
    </div>
  )
}

// ex : 01
/* function App() {
  return (
    <div className="App">
     <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries () {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])


  return(
    <div>
      <h1>Let's have tour all over the world</h1>
      <h3>All countries: {countries.length}</h3>
      {
        // countries.map(country => <p>{country.name.common}</p>)
        countries.map(country => <Country name= {country.name.common} official ={country.name.official} population={country.population}></Country>)
      }

    </div>
  )
}

function Country (props) {
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <h3>Official: {props.official}</h3>
      <h3>Population:{props.population}</h3>
    </div>
  )
} */

export default App;
