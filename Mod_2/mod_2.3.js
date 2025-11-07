'use strict';

const names = [];

for (let i= 1; i < 7; i++) {
  const name = prompt(`Enter a name of dog ${i}:`);
  names.push(name);
}

names.sort().reverse();

const list = document.getElementById('myList');

names.forEach((item) => {
  let li = document.createElement("Li");
  li.innerText = item;
  list.appendChild(li);
  })
