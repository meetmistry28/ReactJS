import React from "react";

function DoctorCard ( Ddata )  {
    console.log(Ddata);

    return (
        <>
            <h1>{Ddata.name}</h1>
            <h2>{Ddata.fee}</h2>
            <h2>{Ddata.degree}</h2>
        </>
    )
    
}

export default DoctorCard;