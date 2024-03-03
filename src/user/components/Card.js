import React from "react";

function Card ({ data }) {
    console.log(data);
    
    return (
        <>
            <h1>{data.name}</h1>
            <h3>{data.price}</h3>
        </>
    )
}

export default Card;