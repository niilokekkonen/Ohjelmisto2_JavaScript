'use strict';

const num1 = parseInt(prompt("Syötä kokonaisluku:"));

const num2 = parseInt(prompt("Syötä toinen kokonaisluku:"));

const num3 = parseInt(prompt("Syötä kolmas kokonaisluku:"));


const sum = num1 + num2 + num3;

const product = num1 * num2 * num3;

const average = sum / 3;

document.querySelector('#maths').innerHTML =
    `sum: ${sum} <br> product: ${product} <br> average:${average}`;