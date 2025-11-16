'use strict';

const num1 = document.querySelector('#num1');

const num2 = document.querySelector('#num2');

const operation = document.querySelector('#operation');

const showResult = document.querySelector('#result');

const button = document.querySelector('#start');

const sumOfInts = (a, b) => a + b;

const subOfInts = (a, b) => a - b;

const multiOfInts = (a, b) => a * b;

const divOfInts = (a, b) => a / b;

button.addEventListener('click', function() {
  const n1 = parseInt(num1.value);
  const n2 = parseInt(num2.value);
  const op = operation.value;
//Choosing the right operation
  let result;

  if (op === 'add') {
    result = sumOfInts(n1, n2);
  }

  else
    if (op === 'sub'){
      result = subOfInts(n1, n2);
    }

    else if (op === 'multi'){
    result = multiOfInts(n1, n2);
    }
  else if (op === 'div'){
    if (n2 === 0){
      showResult.textContent = 'ERROR: division by 0';
      return;
    }
    result = divOfInts(n1, n2);
    }
  showResult.textContent = result;
});
