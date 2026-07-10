const randomNumber = parseInt(Math.floor(Math.random() * 100) + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = [];
let numGames = 1;

laet playGame = true;

if(playGame) {
    submit.addEventListner('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    //
}

function checkGuess(guess) {
    //
}

function displayGuess(guess) {
    //
}

function displayMessage(message) {
    //
}

functionnewGame() {
    //
}

function endGame() 
{
    //
}