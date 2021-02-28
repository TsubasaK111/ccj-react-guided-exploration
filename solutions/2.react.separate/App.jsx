import React, { useState, useEffect } from "react";
import Greeting from "./Greeting";
import Input from "./Input";

function App() {
  const [name, setName] = useState("Everyone");
  const [color, setColor] = useState("blue");

  useEffect(() => {
    document.body.style.color = color;
  });

  return (
    <>
      {/* Greeting ã³ã³ãã¼ãã³ã */}
      <Greeting name={name} />

      {/* Input ã³ã³ãã¼ãã³ã */}
      <Input update={setName} placeHolder="Type a name"/>
      <Input update={setColor} placeHolder="Type a color"/>
    </>
  )
}

export default App;