"use strict";

let userChoice;
let computerChoice;

/** knapper **/
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

addEventlistenersToButtons();
function addEventlistenersToButtons() {
  rockBtn.addEventListener("click", rockKlik);
  paperBtn.addEventListener("click", paperKlik);
  scissorsBtn.addEventListener("click", scissorsKlik);
}

function rockKlik() {
  console.log("ROCK");
  userChoice = "rock";
  computerGuess();
}

function paperKlik() {
  console.log("PAPER");
  userChoice = "paper";
  computerGuess();
}

function scissorsKlik() {
  console.log("SCISSORS");
  userChoice = "scissors";
  computerGuess();
}

function computerGuess() {
  /* tilføjning af array */
  const choice_arr = ("rock", "paper", "scissors");
  /** 0, 1 eller 2 bliver valgt**/
  const randoNum = Math.floor(Math.random() * 3);
  console.log("computerChoice", computerChoice);
  computerChoice = choice_arr[randoNum];
  animationStart();
}

function animationStart() {
  player1.classList.add("shake");
  player2.classList.add("shake");
}

function animationEnd() {
  //evaluation of game-play/choices
  /** Fjern ryst animation og vis det valgte tegn **/
}

function showResultScreen() {
  //En if-sætning der viser hvem har vundet
}
