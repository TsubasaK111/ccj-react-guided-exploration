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

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
