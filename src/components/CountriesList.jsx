import {Link} from "react-router-dom"

function CountriesList({countryList}) {
  console.log(countryList)
  return (
    <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
              {
              countryList.map(e=>{
                  return <Link key={e.name.common} className="list-group-item list-group-item-action" to={`/${e.alpha3Code}`}>{e.name.common}</Link>
              })
            }
            </div>

          </div>
  )
}

export default CountriesList