/**
 * React 1
 *
 * 1. どのように ReactDOM はコンポーネントをレンダリングするか
 * 2. Appコンポーネントに全てのコードを書く
 * 3. JSX と HTML の違いを探る
 * 4. JSX要素にイベントリスナーをアタッチする方法を確認する
 * 5. useState, useEffect, useRef の使用方法を確認する
 *
 */
import React, { useState } from "react";
import ReactDOM from "react-dom";
// import "./styles.css";

function App() {
  const [name, setName] = useState("Everyone");

  return (
    <section>
      <h1 className="greeting">Hello, {name}!</h1>
      <input
        type="text"
        placeholder="Type a name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
