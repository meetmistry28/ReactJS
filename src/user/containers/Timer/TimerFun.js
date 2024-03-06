import React, { useEffect, useState } from "react";
import Style from "./Timer.module.css";

function TimerFun(props) {
  const [data, setData] = useState(new Date());

  useEffect(() => {
    console.log("Mounting");
    const timerRef = setInterval(() => {
      setData(new Date());
    }, 1000);

    return () => {
      clearInterval(timerRef);
    };
  }, []);

  const time = data.toLocaleTimeString();

  return (
    <>
      <div class={Style.time}>
        <h1>Timer</h1>

        <h2>{time}</h2>
      </div>
    </>
  );
}

export default TimerFun;
