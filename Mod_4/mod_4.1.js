
'use strict';


async function searchTV(searchString){
  try {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=' + searchString.value);
    const result = await response.json();
    if (!response.ok) {
      console.log('Cant fetch')
    }
    else {
      console.log(`Results:`, result);
      return result;
    }
  }
  catch(error){
    console.log('ERROR:',error);
  }
}

const inputText = document.querySelector('input');
document.querySelector('#tv-maze').addEventListener('submit', async function (event) {
  event.preventDefault();
  const result = await searchTV(inputText);
  /*
  You can access more items by adding more keywords for example (item.show.name)
  */
  result.forEach((item ) =>{
      console.log(item.show.name);
  })
});



