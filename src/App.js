import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countriesArr from "./countries.json"
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import {useState, useEffect} from "react"
import axios from "axios"


function App() {

  const [countries, setCountries] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(()=>{

    getData()
    

  }, [countries])

  const getData = async ()=>{
    const listaPaises = await fetch("https://ih-countries-api.herokuapp.com/countries")
    const paises = await listaPaises.json()
    setCountries(paises)
    setIsFetching(false)
  }

  
  if(isFetching === true){
    return <h5>Cargando ...</h5>
  }
  
  return (
    <div className="App">

      <Navbar/>

      <div className="container">
        <div className='row'>
          <CountriesList countries={countries} />

      
          <Routes>
            <Route path="/:id" element={ <CountryDetails countryList={countries} /> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
