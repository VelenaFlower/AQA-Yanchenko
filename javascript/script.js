// Задание №1
const enter = document.getElementById("enter");
const hello = document.getElementById("helloText");

enter.addEventListener("keydown", e => {
  if(e.keyCode === 13) {
    let number = enter.value;
    (number > 7) ?  hello.textContent = "Привет" :  hello.textContent = "";
  }
});

// Задание №2
const enterName = document.getElementById("enterName");
const helloName = document.getElementById("helloName");

enterName.addEventListener("keydown", e => {
  let name = enterName.value;
  let baseName = "Вячеслав";
  if(e.keyCode === 13) {
    (name === baseName) ? helloName.textContent = "Привет, Вячеслав" : helloName.textContent = "Нет такого имени";
    if (name === "") {
      helloName.textContent = "";
    }
  }
});

// Задание №3
const btn = document.getElementById("btn");
const numbers = document.getElementById("numbers");

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
