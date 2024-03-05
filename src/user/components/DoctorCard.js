import React from "react";

function DoctorCard ( {d} )  {
    console.log(d);

    return (
        <>
            <h1>Doctor Name: {d.name}</h1>
            <h2>Fee: {d.fee}</h2>
            <h2>Degree: {d.degree}</h2>
        </>
    )
    
}

export default DoctorCard;

