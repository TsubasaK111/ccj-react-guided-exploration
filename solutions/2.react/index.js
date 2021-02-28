/**
 * React 2
 * Reactアーキテクチャに沿って、データの流れを学ぶ。
 *
 * 1. 大きな App コンポーネントを小さなコンポーネントに分割する
 * 2. これらのコンポーネントをネストする
 * 3. 親コンポーネントから子コンポーネントに props を渡す
 * 4. 親から子へ関数を props として渡す
 * 5. 子コンポーネントから関数を呼び出して親コンポーネントの state を更新する
 * 6. コンポーネントをファイルに分割する
 */

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Greeting(props) {
  return <h1 className="greeting">Hello, {props.name}!!</h1>;
}

function Input(props) {
  return (
    <input 
      type="text" 
      placeholder={props.placeHolder} 
      onChange={(e) => {
        props.update(e.target.value);
      }}
    ></input>
  )
}

function App() {
  const [name, setName] = useState("Everyone");
  const [color, setColor] = useState("blue");

  useEffect(() => {
    document.body.style.color = color;
  });

  return (
    <>
      {/* Greeting コンポーネント */}
      <Greeting name={name} />

      {/* Input コンポーネント */}
      <Input update={setName} placeHolder="Type a name"/>
      <Input update={setColor} placeHolder="Type a color"/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
