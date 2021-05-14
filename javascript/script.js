const enter = document.getElementById("enter");
const submit = document.getElementById("submit");
const hello = document.getElementById("helloText");
const enterName = document.getElementById("enterName");
const submitName = document.getElementById("submitName");
const helloName = document.getElementById("helloName");

function sayHello() {
  let number = enter.value;
  let name = enterName.value;
  let baseName = "Вячеслав";
  if (number > 7) {
    hello.textContent = "Привет";
  } else {
    hello.textContent = "";
    helloName.textContent = "";
  }
  if (name !== "") {
    (name === baseName) ? helloName.textContent = "Привет, Вячеслав" : helloName.textContent = "Нет такого имени";
  }
}

function clear() {
  let number = enter.value;
  let name = enterName.value;
  if (number === "" || number < 7) {
    hello.textContent = "";
  }
  if (name === "") {
    helloName.textContent = "";
  }
}

submit.addEventListener("click", sayHello);
enter.addEventListener("blur", clear);

submitName.addEventListener("click", sayHello);
enterName.addEventListener("blur", clear);
