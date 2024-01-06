let rand = (parseInt(Math.random()*100 + 1));

const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOv = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGame = 1;

let play = true;

if(play){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(input.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // check if input is correct
    if(isNaN(guess) || guess < 1 || guess > 100) alert("Please enter a Valid Number From 1 to 100");
    else{
        prevGuess.push(guess);
        if(numGame === 11){
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${rand}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //Message regarding how close guess is
    if(guess === rand){
        displayMessage('Congratulation you have guessed it right');
        endGame();
    }
    else if(guess < rand){
        displayMessage('Number is low');
    }
    else{
        displayMessage('Number is high');
    }
}

function displayGuess(guess){
    input.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGame++;
    remaining.innerHTML = `${11 - numGame}`;    
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}<h2>`;
}

function newGame(){
    const newbutton = document.querySelector('#newGame');
    newbutton.addEventListener('click',function(e){
        rand = (parseInt(Math.random()*100 + 1));
        prevGuess = [];
        newGame = 1;
        guessSlot.innerHTML = '';
        remaining,innerHTML = `${11 - numGame}`;
        input.removeAttribute('disabled');
        startOv.removeChild(p);
        play = true;
    })
}

function endGame(){
    input.value = '';
    input.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Click to start new Game <h2>`;
    startOv.appendChild(p);
    play = false;
    newGame();
}