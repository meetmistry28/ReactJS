import React from 'react'

export default function CityFun({cn}) {
    console.log(cn);
    
  return (
    <>
      <h1>City</h1>
      <h2>My City IS {cn === 'INDIA Function' ? 'Dehi' : 'Los Angeles'}</h2>
    </>
  )
}
