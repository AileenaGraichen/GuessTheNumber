"use strict";

window.addEventListener("load", start);

let number;

function start() {
    console.log("JavaScript is running");
    number = generateRandomNumber();
    document.querySelector("#guess-form").addEventListener("submit", receiveGuess);
}

function generateRandomNumber(){
    return 42;
}

function receiveGuess(event){
    event.preventDefault();

    const form = event.target;
    const value = form.guess.valueAsNumber;

    console.log("received guess");
    console.log(form);
    console.log(value);
    checkGuess(value);
}

function checkGuess(guess){
    if(guess === number){
        guessIsCorrect(guess);
    } else if(guess < number){
        guessIsTooLow(guess);
    } else {
        guessIsTooHigh(guess);
    }
}

function guessIsCorrect(guess){
    console.log("correct");
    const list = document.querySelector("#guess-list");
    const html = `<li>You guessed ${guess} - That is correct! Congratulations!</li>`;
    list.insertAdjacentHTML("beforeend", html);
}

function guessIsTooLow(guess){
    console.log("too low");
    const list = document.querySelector("#guess-list");
    const html = `<li>You guessed ${guess} - That was too low! Try again</li>`;
    list.insertAdjacentHTML("beforeend", html);
}

function guessIsTooHigh(guess){
    console.log("too high");
    const list = document.querySelector("#guess-list");
    const html = `<li>You guessed ${guess} - That was too high! Try again</li>`;
    list.insertAdjacentHTML("beforeend", html);
}