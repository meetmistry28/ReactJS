import React from "react";
import "./Card.module.css"

function Card ({ data }) {
    console.log(data);
    
    return (
        <>
        <div className="card"  >
            <h1>{data.name}</h1>
            <h3>{data.price}</h3>
        </div>
            
        </>
    )
}

export default Card;