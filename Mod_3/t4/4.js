'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


const uList = document.querySelector('#target');

for (const prop of students) {
  const liElem = document.createElement('option');
  liElem.value = prop.id;
  liElem.textContent = prop.name;
  uList.appendChild(liElem);
}

//Another way to write the same code saved for later use
/*
students.forEach(student => {
  const liElem = document.createElement('option');
  liElem.value = student.id;
  liElem.textContent = student.name;
  uList.appendChild(liElem);
});

*/
