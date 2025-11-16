'use strict';
const names = ['John', 'Paul', 'Jones'];

const uList = document.querySelector('#target');

for (const name of names) {
  const liElem = document.createElement('li');
  liElem.innerHTML = name;
  uList.appendChild(liElem);
}

