'use strict';

const participants = parseInt(prompt("Enter the amount of participants"));

const names = [];

for (let i= 0; i < participants; i++) {
  const name = prompt("Enter the names of the participants");
  names.push(name);
}

names.sort()

const list = document.getElementById('myList')

names.forEach((item) => {
  let li = document.createElement("Li");
  li.innerText = item;
  list.appendChild(li);
  })
