import React from "react";

function Card({ data }) {
  console.log(data);

  return (
    <>
    <div >
      <h1 style={{ backgroundColor: "red", height: "100px", width:"200px", borderRadius:"10px", padding:"20px" }} >{data.name}</h1>
      <h3>{data.price}</h3>

    </div>
      
    </>
  );
}

export default Card;
