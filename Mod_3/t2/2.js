'use strict';

const list = document.querySelector('#target');

const liElem1 = document.createElement('li');

const liElem2 = document.createElement('li');

const liElem3 = document.createElement('li');

liElem1.innerHTML = '<li>First item</li>';

liElem2.innerHTML = '<li>Second item</li>';

liElem3.innerHTML = '<li>Third item</li>';

list.appendChild(liElem1);
list.appendChild(liElem2);
list.appendChild(liElem3);

liElem2.classList.add('my-item');