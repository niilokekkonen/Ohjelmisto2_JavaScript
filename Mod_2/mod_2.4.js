'use strict';


const numbers = [];


while (true){
  const question = parseInt(prompt("Enter a number:"));
  numbers.push(question);
  if (question === 0) break;
}

//Arranging the numbers from biggest to smallest
numbers.sort((a,b) => b - a);

//Logging to console
numbers.forEach((n) => console.log(n));