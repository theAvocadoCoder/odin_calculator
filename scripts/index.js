
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
let operand1IsSet,
    operatorIsSet = false;

add.disabled = true;
subtract.disabled = true;
multiply.disabled = true;
divide.disabled = true;



/* Event Listeners */

welcomeMessageButton.addEventListener('click', closeWelcomeMessageBox);

keysDiv.addEventListener('click', updateDisplayInput);
keysDiv.addEventListener('click', updateOperationVariables);
clear.addEventListener('click', backspaceDisplay);
clear.addEventListener('dblclick', clearDisplay);



/* Calculator Functions */

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
      updateOperationVariables(obj);
      break;
    case '8':
      obj = {
        target: {
          id: 'eight'
        }
      };
      updateDisplayInput(obj);
      updateOperationVariables(obj);
      break;
    case '7':
      obj = {
        target: {
          id: 'seven'
        }
      };
      updateDisplayInput(obj);
      updateOperationVariables(obj);
      break;
    case '6':
      obj = {
        target: {
          id: 'six'
        }
      };
      updateDisplayInput(obj);
      updateOperationVariables(obj);
      break;
    case '5':
      obj = {
        target: {
          id: 'five'
        }
      };
      updateDisplayInput(obj);
      updateOperationVariables(obj);
      break;
    case '4':
      obj = {
        target: {
          id: 'four'
        }
      };
      updateDisplayInput(obj);
      updateOperationVariables(obj);
      break;
    case '3':
      obj = {
        target: {
          id: 'three'
        }
      };
      updateDisplayInput(obj);
      updateOperationVariables(obj);
      break;
    case '2':
      obj = {
        target: {
          id: 'two'
        }
      };
      updateDisplayInput(obj);
      updateOperationVariables(obj);
      break;
    case '1':
      obj = {
        target: {
          id: 'one'
        }
      };
      updateDisplayInput(obj);
      updateOperationVariables(obj);
      break;
    case '0':
      obj = {
        target: {
          id: 'zero'
        }
      };
      updateDisplayInput(obj);
      updateOperationVariables(obj);
      break;
    case '.':
      obj = {
        target: {
          id: 'point'
        }
      };
      updateDisplayInput(obj);
      updateOperationVariables(obj);
      break;
    case '/':
      obj = {
        target: {
          id: 'divide'
        }
      };
      updateDisplayInput(obj);
      updateOperationVariables(obj);
      break;
    case '-':
      obj = {
        target: {
          id: 'subtract'
        }
      };
      updateDisplayInput(obj);
      updateOperationVariables(obj);
      break;
    case '+':
      obj = {
        target: {
          id: 'add'
        }
      };
      updateDisplayInput(obj);
      updateOperationVariables(obj);
      break;
    case '*':
      obj = {
        target: {
          id: 'multiply'
        }
      };
      updateDisplayInput(obj);
      updateOperationVariables(obj);
      break;
    case '=':
    case 'Enter':
      // Equals function
      obj = {
        target: {
          id: 'equals'
        }
      };
      updateOperationVariables(obj);
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

function closeWelcomeMessageBox() {
  welcomeMessageContainer.style.display = "none";
  document.body.addEventListener('keypress', bindKeys);
  clearDisplay();
}

function updateDisplayInput(event) {
  displayInput.value += numbersObject[event.target.id] !== undefined 
                        && event.target.id !== 'point' 
                        && event.target.id !== 'subtract' 
                        && event.target.id !== 'add' 
                        && event.target.id !== 'multiply' 
                        && event.target.id !== 'divide'
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
      subtract.disabled = false;
      add.disabled = false;
      multiply.disabled = false;
      divide.disabled = false;
      break;
  }
}

function updateOperationVariables(event) {
  // The very first key that the user presses should be in the numbersObject and shouldn't be an operator
  if (
    operand1 === ''
    && operand2 === ''
    && operator === ''
    && operand1IsSet === false
    && operatorIsSet === false
  ) {
    operand1 += numbersObject[event.target.id] !== undefined 
                && event.target.id !== 'subtract' 
                && event.target.id !== 'add' 
                && event.target.id !== 'multiply' 
                && event.target.id !== 'divide'
                ? numbersObject[event.target.id] 
                : '';
  } 
  // This block manages consecutive keypresses for the first operand or pressing an operator when the second operand is not set
  // The next keys the user presses should be in the numbersObject
  // if the user presses an operator, the first operand is complete and the operator gets set
  else if (
    operand1 !== ''
    && operand2 === ''
    && operator === ''
    && operand1IsSet === false
    && operatorIsSet === false
  ) {
    // this block manages operator keypresses
    if (
      event.target.id === 'subtract' 
      || event.target.id === 'add' 
      || event.target.id === 'multiply' 
      || event.target.id === 'divide'
    ) {
      operand1IsSet = true;
      operator = numbersObject[event.target.id];
      operatorIsSet = true;
    } 
    // this block manages non-operator keypresses
    else if (
        numbersObject[event.target.id] !== undefined 
        && event.target.id !== 'subtract' 
        && event.target.id !== 'add' 
        && event.target.id !== 'multiply' 
        && event.target.id !== 'divide'
    ) {
        operand1 += numbersObject[event.target.id];
    }
  }
  // This block manages keypresses for the second operand for the first time
  else if (
    operand1 !== ''
    && operand2 === ''
    && operator !== ''
    && operand1IsSet === true
    && operatorIsSet === true
  ) {
    operand2 += numbersObject[event.target.id];
  }
  //  This block manages consecutive keypresses for the second operand and operator/equals presses when operand2 has a value
  else if (
    operand1 !== ''
    && operand2 !== ''
    && operator !== ''
    && operand1IsSet === true
    && operatorIsSet === true 
  ) {
    if (event.target.id === 'equals') {
      // calculate and set new operator
      // also update operand1 & operand2
      // also update displayInput.value
      // also update result.value
      let _operator = operator === '+' 
                      ? _add
                      : operator === '-' 
                      ? _subtract
                      : operator === '*' 
                      ? _multiply
                      : operator === '/'
                      ? _divide
                      : false;
      result.value = operate(_operator, operand1, operand2);
      operator = '';
      operatorIsSet = false;
      operand1 = result.value;
      operand1IsSet = false;
      operand2 = '';
      displayInput.value = `${operand1}`;
    } else if (
      event.target.id === 'add'
      || event.target.id === 'subtract'
      || event.target.id === 'multiply'
      || event.target.id === 'divide'
    ) {
      // calculate and set new operator
      // also update operand1 & operand2
      // also update displayInput.value
      // also update result.value
      let _operator = event.target.id === 'add' 
                      ? _add
                      : event.target.id === 'subtract' 
                      ? _subtract
                      : event.target.id === 'multiply' 
                      ? _multiply
                      : event.target.id === 'divide'
                      ? _divide
                      : false;
      result.value = operate(_operator, operand1, operand2);
      operator = numbersObject[event.target.id];
      operand1 = result.value;
      operand2 = '';
      displayInput.value = `${operand1}${operator}`;

    } else if (
      numbersObject[event.target.id] !== undefined 
      && event.target.id !== 'subtract' 
      && event.target.id !== 'add' 
      && event.target.id !== 'multiply' 
      && event.target.id !== 'divide'
    ) {
      operand2 += numbersObject[event.target.id];
      // operand1 = result.value !== '' ? result.value : operand1;
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
      operator = '';
      operatorIsSet = false
      subtract.disabled = false;
      add.disabled = false;
      multiply.disabled = false;
      divide.disabled = false;
      break;
    case '+':
      operator = '';
      operatorIsSet = false
      subtract.disabled = false;
      add.disabled = false;
      multiply.disabled = false;
      divide.disabled = false;
      break;
    case '*':
      operator = '';
      operatorIsSet = false
      subtract.disabled = false;
      add.disabled = false;
      multiply.disabled = false;
      divide.disabled = false;
      break;
    case '/':
      operator = '';
      operatorIsSet = false
      subtract.disabled = false;
      add.disabled = false;
      multiply.disabled = false;
      divide.disabled = false;
      break;
  
    default:
      if (operand1 !== '' && operand2 === '') {
        operand1 = removeLastCharInString(operand1)['newString'];
      } else if (operand2 !== '') {
        operand2 = removeLastCharInString(operand2)['newString'];
      }
      break;
  }

  if (displayInput.value.length < 1) {
    clearDisplay();
  }

}

function clearDisplay() {
  displayInput.value = '';
  result.value = '';
  operand1 = '';
  operand2 = '';
  operator = '';
  operand1IsSet = false;
  operatorIsSet = false;
  subtract.disabled = true;
  add.disabled = true;
  multiply.disabled = true;
  divide.disabled = true;
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
  if (operator === false) {
    return
  }
  let result = operator(+num1, +num2);
  return decimalPlacesCount(result) === 0 
          ? result.toFixed(0)
          : decimalPlacesCount(result) === 1 
          ? result.toFixed(1) 
          : decimalPlacesCount(result) === 2 
          ? result.toFixed(2) 
          : decimalPlacesCount(result) === 3 
          ? result.toFixed(3) 
          : result.toFixed(4);
}

function decimalPlacesCount(num) {
  return (num + '').split('.')[1] /* (num + '') smply turns the number into an array */
          ? (num + '').split('.')[1].length 
          : 0;
}

function removeLastCharInString(str) {
  let arr = str.split('');
  arr.pop();

  return {
    'newString': arr.join(''),
    'removed': str[str.length - 1],
  }
}
