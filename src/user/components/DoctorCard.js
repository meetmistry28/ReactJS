import React from "react";

function DoctorCard ( {d} )  {
    console.log(d);

    return (
        <>
            <h1>Doctor Name:{d.name}</h1>
            <h2>Treatement Fee:{d.fee}</h2>
            <h2>Doctor Colification:{d.degree}</h2>
        </>
    )
    
}

export default DoctorCard;