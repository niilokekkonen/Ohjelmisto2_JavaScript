'use strict';

async function searchJoke(searchString) {
  try {
    const response = await fetch(
        'https://api.chucknorris.io/jokes/search?query=' + searchString.value);
    const result = await response.json();
    if (!response.ok) {
      console.log('Cant fetch');
    }
    else{
        console.log('Chuck norris', result);
    return result;
    }
  }catch (error) {
    console.log('Error', error);
    alert('TRY AGAIN!');
    return {total:0, result: []};
  }
}

//Getting body and creating article
const body = document.querySelector('body');
const arElem = document.createElement('article');

//Listener to the form
const searchForm = document.querySelector('#joke');
const inputText = searchForm.querySelector('input');
searchForm.addEventListener('submit', async function(event) {
  event.preventDefault();
  if (inputText.value.length > 2) {
    try {
      arElem.innerHTML = '';



      const chuckNorrisResult = await searchJoke(inputText);
      console.log('event handler results', chuckNorrisResult);

      chuckNorrisResult.result.forEach((joke) => {

        const pElem = document.createElement('p');

        body.appendChild(arElem);
        arElem.appendChild(pElem);
        pElem.textContent = joke.value;

      });
    } catch (error) {
      console.log('Error', error);
    }
  }
});


