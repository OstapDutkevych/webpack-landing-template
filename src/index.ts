// DEMO JOKE APP
import generateJoke from './generateJoke'
import './main.sass'

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()

console.log('lol2as2')
