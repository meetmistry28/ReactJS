import React, { useState } from "react";

const Cat = () => {
  const [data, setData] = useState(0);
  
  function updateAnimal() {
    setData(data + 1);
  }

  return (
    <>
      <h1>{data}</h1>
      <button onClick={updateAnimal}>Update Number Function</button>
    </>
  );
};

export default Cat;
