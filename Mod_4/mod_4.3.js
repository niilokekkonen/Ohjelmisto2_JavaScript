//Tasks 3 and 4 are both in this file

'use strict';

async function searchTV(searchString) {
  try {
    const response = await fetch(
        'https://api.tvmaze.com/search/shows?q=' + searchString.value);
    const data = await response.json();
    if (!response.ok) {
      console.log('cant fetch');
      return 'Error';

    }
    console.log(`Results:`, data);
    return data;

  } catch (error) {
    console.log('ERROR:', error);
    return error;
  }
}

const div = document.querySelector('#target');

const inputText = document.querySelector('input');
document.querySelector('#tv-maze').
    addEventListener('submit', async function(event) {
      event.preventDefault();

      div.innerHTML = '';

      try {
        const result = await searchTV(inputText);
        console.log('Results', result);

        result.forEach((element) => {
          //Creating the necessary elements
          const h2Elem = document.createElement('h2');
          h2Elem.textContent = element.show.name;

          //Article
          const article = document.createElement('article');

          const aElem = document.createElement('a');
          aElem.href = element.show.url;
          aElem.target = '_blank';

          const imgElem = document.createElement('img');

          //Same thing as the if statement below
          imgElem.src = element.show.image ? element.show.image.medium : 'https://placehold.co/210x295?text=Not%20Found';
                        //if this          = true                      /  false
          /*
          if(element.show.image){
            imgElem.src = element.show.image.medium;
          }else{
            imgElem.src = 'https://placehold.co/210x295?text=Not%20Found'
          }
          */

          imgElem.alt = element.show.name;

          //Creating new div element
          const divTwo = document.createElement('div');
          article.appendChild(divTwo);

          divTwo.innerHTML = element.show.summary;

          div.appendChild(article);
          article.appendChild(h2Elem);
          article.appendChild(imgElem);

        });
      } catch (error) {
        console.log('Error', error);
      }
    });



