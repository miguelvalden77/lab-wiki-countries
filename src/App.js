import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countriesArr from "./countries.json"
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import {useState, useEffect} from "react"
import Home from "./components/Home"
import axios from "axios"


function App() {

  const [countries, setCountries] = useState()
  const [isFetching, setIsFetching] = useState(true)

  useEffect(()=>{

    getData()

  }, [])

  const getData = async ()=>{
    const listaPaises = await axios("https://ih-countries-api.herokuapp.com/countries")
    setCountries(listaPaises.data)
    setIsFetching(false)
  }

  
  if(isFetching === true){
    return <h5>Cargando ...</h5>
  }

  console.log(countries)
  
  return (
    <div className="App">

      <Navbar/>

      <div className="container">
        <div className='row'>
          <CountriesList countryList={countries} />

      
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/:id" element={ <CountryDetails countryList={countries} /> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
