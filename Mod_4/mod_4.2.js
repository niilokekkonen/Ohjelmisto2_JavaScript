'use strict';

async function searchTV (searchString){
  try {
    const response = await fetch(
        'https://api.tvmaze.com/search/shows?q=' + searchString.value);
    const result = await response.json();
    if(!response.ok){
      console.log('Cant fetch');
    }
    else {console.log('TV-Maze results', result);
    return result;
    }
  }
  catch (error){
    console.log('Error', error);
    alert('TRY AGAIN!');
  }
}

const searchForm = document.querySelector('#tv-maze');
const inputText = searchForm.querySelector('input');
searchForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  if (inputText.value.length > 2){
    const tvMazeResult = await searchTV(inputText);
    console.log('event handler results', tvMazeResult);
  }
});