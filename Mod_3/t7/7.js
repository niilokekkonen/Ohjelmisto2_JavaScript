'use strict';

//mouse hover effect
const p = document.querySelector('#trigger');

const img = document.querySelector('#target');

p.addEventListener('mouseover', function(){
  console.log(`<- Times you have hovered`);
  img.src = "img/picB.jpg";
});

p.addEventListener('mouseout', function() {
  img.src = "img/picA.jpg";
});