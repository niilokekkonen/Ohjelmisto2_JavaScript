'use strict';

const n1 = parseInt(prompt("Enter a number:"))
const n2 = parseInt(prompt("Enter a second number:"))
const n3 = parseInt(prompt("Enter a third number:"))
const n4 = parseInt(prompt("Enter a fourth number:"))
const n5 = parseInt(prompt("Enter a fifth number:"))

const nums = [];

nums.push(n1,n2,n3,n4,n5);

for (let i = nums.length - 1; i >= 0; i--){
  console.log(nums[i]);
}





