function add(num1, num2) {
  return +(num1 + num2).toFixed(1);
}

function subtract(num1, num2) {
  return +(num1 - num2).toFixed(1)
}

function multiply(num1, num2) {
  return +(num1 * num2).toFixed(1)
}

function divide(num1, num2) {
  return +(num1 / num2).toFixed(1)
}

function operate(operator, num1, num2) {
  return operator(+num1, +num2)
}

function populateOnKeyPress(key, display) {
  display.innerText = key.name;
}

function decimalPlacesCount(num) {
  return (num + '').split('.')[1].length;
}





export default {
  add,
  subtract,
  multiply,
  divide,
  operate,
  populateOnKeyPress,
  decimalPlacesCount,
}
