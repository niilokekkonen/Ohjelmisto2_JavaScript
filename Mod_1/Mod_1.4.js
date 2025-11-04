'use strict';

const name = prompt("What is your name, young wizard?")

const one = 'gryffindor'

const two = 'slytherin'

const three = 'hufflepuff'

const four = 'ravenclaw'

const randomNum = Math.floor(Math.random() * 4) + 1;

let house;

if (randomNum === 1) {
  house = one;
} else if (randomNum === 2){
  house = two;
} else if (randomNum === 3) {
  house = three
}else {
  house = four
}

document.querySelector('#HarryPotter').innerText = `${name}, you are a ${house}`