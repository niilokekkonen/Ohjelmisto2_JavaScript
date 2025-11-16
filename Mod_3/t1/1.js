'use strict';
//List of the elements
let listElem = document.querySelector('#target');
//Adding the elements to the list
listElem.innerHTML += '<li>First item</li>';
listElem.innerHTML += '<li>Second item</li>';
listElem.innerHTML += '<li>Third item</li>';

listElem.classList.add('my-list');