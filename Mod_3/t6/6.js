'use strict';

//Get the button
const button = document.querySelector('button');

button.addEventListener('click', function (event){
  console.log('You clicked the button!');
  alert('Button clicked');
});