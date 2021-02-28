import React, { useState, useEffect } from "react";

export default function Time() {
  console.log("Time rendered");
  // time
  const [time, setTime] = useState("Loading...");
  useEffect(() => {
    // this is an effect.
    const timeOut = setInterval(() => {
      const time = new Date().toLocaleString();
      setTime(time);
      // run every second
    }, 1000);
    // this is the cleanup.
    return function cleanUp() {
      clearInterval(timeOut);
    };
    // If we don't clean up, we would be adding setIntervals() to the stack on every render.
  }, [time]);
  return <h1>{time}</h1>;
}
