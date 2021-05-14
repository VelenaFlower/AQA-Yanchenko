const enter = document.getElementById("enter");
const submit = document.getElementById("submit");
const hello = document.getElementById("helloText");

function sayHello() {
  let number = enter.value;
  if (number > 7) {
    hello.textContent = "Привет!";
  }
  if (number === "" || number < 7) {
    hello.textContent = "";
  }
}
function clear() {
  let number = enter.value;
  if (number === "" || number < 7) {
    hello.textContent = "";
  }
}

submit.addEventListener("click", sayHello);
enter.addEventListener("blur", clear);
