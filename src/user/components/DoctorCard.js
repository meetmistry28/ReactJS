import React from "react";

function DoctorCard ( Ddata )  {
    console.log(Ddata);

    return (
        <>
            <h1>Doctor Name:{Ddata.name}</h1>
            <h2>Treatement Fee:{Ddata.fee}</h2>
            <h2>Doctor Colification:{Ddata.degree}</h2>
        </>
    )
    
}

export default DoctorCard;