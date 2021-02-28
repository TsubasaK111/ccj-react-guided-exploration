// あいさつのテキストを作成
const greeting = document.createElement("h1");
greeting.innerText = "Hello, Everyone!";
greeting.classList = "greeting";
document.body.appendChild(greeting);

// input を作成
const nameInput = document.createElement("input");
nameInput.type = "text";
document.body.appendChild(nameInput);

// inputに入力された文字であいさつのテキストを書き換える
function render() {
  greeting.innerText = `Hello, ${nameInput.value}!`;
}

// キーボードのイベントを検知したら render関数を呼び出す
nameInput.addEventListener("keyup", () => {
  render();
});
