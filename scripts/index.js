
/* Variables */

const welcomeMessageContainer = document.getElementById("welcome-message-container");
const welcomeMessageButton = document.getElementById("welcome-message-button");

const displayInput = document.getElementById("display-input");
const keysDiv = document.getElementById("keys-div");
const point = document.getElementById("point");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const result = document.getElementById("result")

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
  'multiply': '*',
  'subtract': '-',
}



/* Initialize Operating Values */

let operand1,
    operand2,
    operator = '';
let operand1Set,
    operatorSet = false;

add.disabled,
subtract.disabled,
multiply.disabled,
divide.disabled = true;



/* Event Listeners */

welcomeMessageButton.addEventListener('click', closeWelcomeMessageBox);

document.body.addEventListener('keypress', bindKeys);
keysDiv.addEventListener('click', updateDisplayInput);
keysDiv.addEventListener('click', updateOperationVariables);
clear.addEventListener('click', backspaceDisplay);
clear.addEventListener('dbclick', clearDisplay);



/* Functions */

function closeWelcomeMessageBox() {
  welcomeMessageContainer.style.display = "none";
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

function updateDisplayInput(event) {
  displayInput.value += numbersObject[event.target.id] !== undefined 
                          && event.target.id !== 'point' 
                          && event.target.id !== 'subtract' 
                          && event.target.id !== 'add' 
                          && event.target.id !== 'multiply' 
                          && event.target.id !== 'divide' 
                          && event.target.id !== 'clear' 
                          && event.target.id !== 'equals' 
                          ? numbersObject[event.target.id] 
                          : '';

  // The switch statement disables the point key once pressed, and re-enables it when an operator is pressed
  // It also disables all operators when one is pressed
  // The default re-enables the operators when a key that is not point is pressed
  switch (event.target.id) {
    case 'point':
      if (point.disabled !== true) {
        displayInput.value += '.';
        point.disabled = true;
      }
      break;
    case 'subtract':
      point.disabled = false;
      if (subtract.disabled !== true) {
        displayInput.value += '-';
        subtract.disabled = true;
        add.disabled = true;
        multiply.disabled = true;
        divide.disabled = true;
      }
      
      break;
    case 'add':
      point.disabled = false;
      if (add.disabled !== true) {
        displayInput.value += '+';
        subtract.disabled = true;
        add.disabled = true;
        multiply.disabled = true;
        divide.disabled = true;
      }
      
      break;
    case 'multiply':
      point.disabled = false;
      if (multiply.disabled !== true) {
        displayInput.value += '*';
        subtract.disabled = true;
        add.disabled = true;
        multiply.disabled = true;
        divide.disabled = true;
      }
      
      break;
    case 'divide':
      point.disabled = false;
      if (divide.disabled !== true) {
        displayInput.value += '/';
        subtract.disabled = true;
        add.disabled = true;
        multiply.disabled = true;
        divide.disabled = true;
      }
      
      break;
  
    default:
      if (event.target.id !== 'point') {
        subtract.disabled = false;
        add.disabled = false;
        multiply.disabled = false;
        divide.disabled = false;
      }
      break;
  }
}

function updateOperationVariables(event) {
  if (operand1Set === false) { //If user is inputting numbers or point for the first time
    if (
      (event.target.id === 'subtract' 
      || event.target.id === 'add' 
      || event.target.id === 'multiply' 
      || event.target.id === 'divide') 
      && displayInput.value !== ''
      ) 
    {
      operand1Set = true;
      operator = event.target.id;
      operatorSet = true;
    } else if (event.target.id === 'clear' && displayInput.value !== '' || event.target.id === 'equals') {
      continue;
    } else {
      operand1 += numbersObject[event.target.id];
    }
  } else if (operand1Set === true && operatorSet === true) { //If user is putting numbers or point after operator OR if user is pressing equals(or Enter)

    if (
      event.target.id !== 'add' 
      && event.target.id !== 'subtract' 
      && event.target.id !== 'multiply' 
      && event.target.id !== 'divide' 
      && event.target.id !== 'equals' 
      )
    {
      operand2 += numbersObject[event.target.id];

    } else if (
      (event.target.id === 'add' 
      || event.target.id === 'subtract' 
      || event.target.id === 'multiply' 
      || event.target.id === 'divide') 
      && (displayInput.value[displayInput.value.length - 2] !== '.')
      ) 
    {
      operator = event.target.id;
      if (
        displayInput.value[displayInput.value.length - 1] !== '+'
        && displayInput.value[displayInput.value.length - 1] !== '-'
        && displayInput.value[displayInput.value.length - 1] !== '*'
        && displayInput.value[displayInput.value.length - 1] !== '/'
        )
        {
          let _operator = operator === 'add'
                            ? _add
                            : operator === 'subtract'
                            ? _subtract
                            : operator === 'multiply'
                            ? _multiply
                            : operator === 'divide'
                            ? _divide
                            : '';
          const _result = operate(_operator, Number(operand1), Number(operand2));
          operand1 = _result + '';
          result.value = _result
        }

    } else if (
      event.target.id === 'equals' 
      && displayInput.value[displayInput.value.length - 1] !== '.'
      && displayInput.value[displayInput.value.length - 1] !== '+'
      && displayInput.value[displayInput.value.length - 1] !== '-'
      && displayInput.value[displayInput.value.length - 1] !== '*'
      && displayInput.value[displayInput.value.length - 1] !== '/'
      ) 
    {
      let _operator = operator === 'add'
                        ? _add
                        : operator === 'subtract'
                        ? _subtract
                        : operator === 'multiply'
                        ? _multiply
                        : operator === 'divide'
                        ? _divide
                        : '';
      const _result = operate(_operator, Number(operand1), Number(operand2));
      operand1 = _result + '';
      result.value = _result
    }
  }

}

function backspaceDisplay() {
  const RemovalObj = removeLastCharInString(displayInput.value);
  displayInput.value = RemovalObj['newString'];
  
  switch (RemovalObj['removed']) {
    case '.':
      point.disabled = false;
      break;
    case '-':
      subtract.disabled = false;
      add.disabled = false;
      multiply.disabled = false;
      divide.disabled = false;
      break;
    case '+':
      subtract.disabled = false;
      add.disabled = false;
      multiply.disabled = false;
      divide.disabled = false;
      break;
    case '*':
      subtract.disabled = false;
      add.disabled = false;
      multiply.disabled = false;
      divide.disabled = false;
      break;
    case '/':
      subtract.disabled = false;
      add.disabled = false;
      multiply.disabled = false;
      divide.disabled = false;
      break;
  
    default:
      break;
  }

  if (displayInput.value.length < 1) {
    clearDisplay();
  }

}

function clearDisplay() {
  displayInput.value = '';
  operand1 = '';
  operand2 = '';
  operand1Set = false;
  operator = '';
  operatorSet = false;
  subtract.disabled = false;
  add.disabled = false;
  multiply.disabled = false;
  divide.disabled = false;
  point.disabled = false;
}



/* Helper Functions */

function _add(num1, num2) {
  return +(num1 + num2);
}

function _subtract(num1, num2) {
  return +(num1 - num2);
}

function _multiply(num1, num2) {
  return +(num1 * num2);
}

function _divide(num1, num2) {
  return +(num1 / num2);
}

function operate(operator, num1, num2) {
  return operator(+num1, +num2)
}

function decimalPlacesCount(num) {
  return (num + '').split('.')[1].length;
}

function removeLastCharInString(str) {
  let arr = str.split('');
  arr.pop();

  return {
    'newString': arr.join(''),
    'removed': str[str.length - 1],
  }
}
