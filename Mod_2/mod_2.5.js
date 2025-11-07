'use strict';


const numbers = [];


while (true){
  const question = parseInt(prompt("Enter a number:"));

  if (numbers.includes(question)) {
    console.log(`The number ${question} has already been entered`);
    break;
  }

  numbers.push(question)

}

//Arranging the numbers from biggest to smallest
numbers.sort((a,b) => a - b);

//Logging to console
numbers.forEach((n) => console.log(n));