const enter = document.getElementById("enter");
const submit = document.getElementById("submit");
const hello = document.getElementById("helloText");
const enterName = document.getElementById("enterName");
const submitName = document.getElementById("submitName");
const helloName = document.getElementById("helloName");
const btn = document.getElementById("btn");
const numbers = document.getElementById("numbers");

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

function clearText() {
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
enter.addEventListener("blur", clearText);

submitName.addEventListener("click", sayHello);
enterName.addEventListener("blur", clearText);


function getNumbers() {
  const arr =  Array(50).fill().map(() => Math.round(Math.random() * 99));
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      newArr.push(arr[i]);
    }
  }
  numbers.textContent = `[${newArr}]`;
}

btn.addEventListener("click", getNumbers);
