import React from "react";
import style from "../card/Card"

function Card ({ data }) {
    console.log(data);
    
    return (
        <>
        <div className={style.Card}  >
            <h1>{data.name}</h1>
            <h3>{data.price}</h3>
        </div>
            
        </>
    )
}

export default Card;