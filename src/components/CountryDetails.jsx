import { useParams } from "react-router-dom"
import {useEffect} from "react"
import axios from "axios"
import { useState } from "react"

function CountryDetails({countryList}) {

  const [pais, setPais] = useState({})
  const {id} = useParams()

  useEffect(()=>{

    getData()

  }, [id])

  const getData = async ()=>{
    const country = await axios(`https://ih-countries-api.herokuapp.com/countries/${id}`)
    console.log(country.data)
    setPais(country.data)
  }
  
  return (
    <div>
        <p>{pais.name.common}</p>
    </div>
  )
}

export default CountryDetails