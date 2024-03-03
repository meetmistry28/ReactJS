import {useState} from 'react'
import City from './City';
import CityFun from './CityFun';

function CountryFun() {
  const [countryName,setData] = useState("INDIA Function") 

  function updateData () {
    setData("USA Function")
  }
  
  return (
    <>
      <h1>{countryName}</h1>
      <button onClick={updateData}>Update country Function</button>

      <CityFun cn={countryName} />
    </>
  )
}

export default CountryFun;