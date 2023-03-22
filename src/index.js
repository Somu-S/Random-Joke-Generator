let GenBtn = document.getElementById('gen-btn');
const jokesField = document.getElementById('Random-jokes-field');
let url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

async function getJokes(){
    try {
        let response = await fetch(url);
        let data =await response.json();
        console.log(data);
        jokesField.innerHTML=`${data.joke}`
    } catch (error) {
        console.log(error);
    }
}

getJokes();

GenBtn.addEventListener('click',getJokes);