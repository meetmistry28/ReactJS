import {useState} from 'react'

function CountryFun() {
  const [data,setData] = useState("INDIA Function") 

  function updateData () {
    setData("USA Function")
  }
  
  return (
    <>
      
      <h1>{data}</h1>
      <button onClick={updateData}>Update country Function</button>
    </>
  )
}

export default CountryFun;