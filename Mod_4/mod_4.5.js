//https://api.chucknorris.io/jokes/random
'use strict';

async function getJoke(){
 try {
   const response = await fetch('https://api.chucknorris.io/jokes/random');
   const data = await response.json();
   if (!response.ok){
     console.log('Cant fetch');
   } else {
     console.log('Joke:', data.value);
     return data.value;
   }
 }
 catch (error) {
   console.log('Error', error);
   return error;
 }
}

getJoke();



