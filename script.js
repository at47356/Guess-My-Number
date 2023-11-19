'use strict';

const restart = document.querySelector('.again');
const num = document.querySelector('.number');
const check = document.querySelector('.check')
const msg = document.querySelector('.message');
let dataScore = 20;
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore')
let numVal = Math.floor(Math.random() * 20) + 1

// console.log(numVal, score.innerHTML)

const game = () => {  
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        msg.textContent = "⛔ No number ⛔"
    } else if(guess == numVal) {
        msg.textContent = "🎉You Guessed Correctly🎉"
        num.textContent = numVal
        document.body.style.backgroundColor = "#60b347"
        score.textContent > highScore.textContent ? highScore.textContent = score.textContent : '' ;
        document.querySelector('.number').style.width = "25rem";
    } else if(guess != numVal) {
        if(dataScore > 1){
            dataScore--
            score.textContent = dataScore
            msg.textContent = guess < numVal ? "📉Too Low!" : "📈Too High!"
        } else {
            msg.textContent = "😢 You Lost!"
            score.textContent = 0
            document.body.style.backgroundColor = "red"
        }
    }
}


const newGame = () => {
    document.body.style.backgroundColor = "#222";
    num.textContent = '?';
    msg.textContent = 'Start guessing...';
    dataScore = 20
    score.textContent = dataScore
    numVal = Math.floor(Math.random() * 20) + 1
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = "15rem";

    // console.log(numVal)
}

check.addEventListener('click', game);
restart.addEventListener('click', newGame)