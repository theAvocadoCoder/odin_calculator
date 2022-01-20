
/* Variables */

const displayInput = document.getElementById("display-input");
const keysDiv = document.getElementById("keys-div");
const point = document.getElementById("point");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

const numbersObject = {
  'nine': '9',
  'eight': '8',
  'seven': '7',
  'six': '6',
  'five': '5',
  'four': '4',
  'three': '3',
  'two': '2',
  'one': '1',
  'point': '.',
  'zero': '0',
  'divide': '/',
  'add': '+',
  'multiply': 'x',
  'subtract': '-',
}



/* Event Listeners */

document.body.addEventListener('keypress', bindKeys);
keysDiv.addEventListener('click', updateDisplayInput);
clear.addEventListener('click', backspaceDisplay);
clear.addEventListener('dbclick', clearDisplay);



/* Functions */

function updateDisplayInput(event) {
  displayInput.value += numbersObject[event.target.id] !== undefined && event.target.id !== 'point' ? numbersObject[event.target.id] : '';
  if (event.target.id === 'point' && point.disabled !== true) {
    displayInput.value += '.';
    point.disabled = true;
  }
}

function bindKeys(event) {
  // console.log(event)
  let obj;
  switch (event.key) {
    case '9':
      obj = {
        target: {
          id: 'nine'
        }
      };
      updateDisplayInput(obj);
      break;
    case '8':
      obj = {
        target: {
          id: 'eight'
        }
      };
      updateDisplayInput(obj);
      break;
    case '7':
      obj = {
        target: {
          id: 'seven'
        }
      };
      updateDisplayInput(obj);
      break;
    case '6':
      obj = {
        target: {
          id: 'six'
        }
      };
      updateDisplayInput(obj);
      break;
    case '5':
      obj = {
        target: {
          id: 'five'
        }
      };
      updateDisplayInput(obj);
      break;
    case '4':
      obj = {
        target: {
          id: 'four'
        }
      };
      updateDisplayInput(obj);
      break;
    case '3':
      obj = {
        target: {
          id: 'three'
        }
      };
      updateDisplayInput(obj);
      break;
    case '2':
      obj = {
        target: {
          id: 'two'
        }
      };
      updateDisplayInput(obj);
      break;
    case '1':
      obj = {
        target: {
          id: 'one'
        }
      };
      updateDisplayInput(obj);
      break;
    case '0':
      obj = {
        target: {
          id: 'zero'
        }
      };
      updateDisplayInput(obj);
      break;
    case '.':
      obj = {
        target: {
          id: 'point'
        }
      };
      updateDisplayInput(obj);
      break;
    case '/':
      obj = {
        target: {
          id: 'divide'
        }
      };
      updateDisplayInput(obj);
      break;
    case '-':
      obj = {
        target: {
          id: 'subtract'
        }
      };
      updateDisplayInput(obj);
      break;
    case '+':
      obj = {
        target: {
          id: 'add'
        }
      };
      updateDisplayInput(obj);
      break;
    case '*':
      obj = {
        target: {
          id: 'multiply'
        }
      };
      updateDisplayInput(obj);
      break;
    case '='||'Enter':
      // Equals function
      break;
    case ' ':
      // space bar to delete and holding shift to clear all
      if (event.shiftKey) {
        clearDisplay();
      } else {
        backspaceDisplay();
      }
      break;
  
    default:
      break;
  }
}

function backspaceDisplay() {
  displayInput.value = removeLastCharInString(displayInput.value);
}

function clearDisplay() {
  displayInputValue = '';
}

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

function removeLastCharInString(str) {
  return str.replace(str[str.length - 1], '');
}
