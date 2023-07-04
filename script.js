let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');

let result = document.querySelector('#result');

document.querySelector('#add').addEventListener('click', add);
document.querySelector('#subtract').addEventListener('click', subtract);
document.querySelector('#divide').addEventListener('click', divide);
document.querySelector('#multiply').addEventListener('click', multiply);

function add() {
  let val1 = +num1.value;
  let val2 = +num2.value;

  let sum = val1 + val2;
  helper(sum);
}

function subtract() {
  let val1 = +num1.value;
  let val2 = +num2.value;

  let sum = val1 - val2;

  helper(sum);
}

function divide() {
  let val1 = +num1.value;
  let val2 = +num2.value;

  let sum = val1 / val2;

  helper(sum);
}

function multiply() {
  let val1 = +num1.value;
  let val2 = +num2.value;

  let sum = val1 * val2;

  helper(sum);
}

function helper(res) {
  result.textContent = `Sum: ${res}`;
}
