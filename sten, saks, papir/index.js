"use strict";

let userChoice;
let computerChoice;

/** knapper **/
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const winScreen = document.querySelector("#win");
const loseScreen = document.querySelector("#lose");
const drawScreen = document.querySelector("#draw");

addEventlistenersToButtons();
function addEventlistenersToButtons() {
  rockBtn.addEventListener("click", rockKlik);
  paperBtn.addEventListener("click", paperKlik);
  scissorsBtn.addEventListener("click", scissorsKlik);
}

//har tilføjet resetGame ved hver knap, så skærmen/spillet nulstilles
function rockKlik() {
  resetGame();
  console.log("ROCK");
  userChoice = "rock";
  computerGuess();
}

function paperKlik() {
  resetGame();
  console.log("PAPER");
  userChoice = "paper";
  computerGuess();
}

function scissorsKlik() {
  resetGame();
  console.log("SCISSORS");
  userChoice = "scissors";
  computerGuess();
}

function computerGuess() {
  /* tilføjning af array */
  const choice_arr = ["rock", "paper", "scissors"];
  /** 0, 1 eller 2 bliver valgt**/
  const randoNum = Math.floor(Math.random() * 3);
  //disse to står omvendt før, hvilket gjorde computerChoice kom op som undefined til at starte med
  computerChoice = choice_arr[randoNum];
  console.log("computerChoice", computerChoice);
  //
  animationStart();
}

function animationStart() {
  player1.classList.add("shake");
  player1.addEventListener("animationend", animationEnd, { once: true });

  player2.classList.add("shake");
  player2.addEventListener("animationend", animationEnd); //kan evt undlades, da spillet "kun behøver" at lytte efter player1 altså userChoice
}

function animationEnd() {
  //evaluation of game-play/choices
  /** fjerner ryst animation så det valgte tegn kan vises**/
  /** fjerner også tegn, ellers bliver det samme vist igen og igen **/

  player1.classList.remove("shake", "rock", "paper", "scissors");
  player1.classList.add(userChoice);

  player2.classList.remove("shake", "rock", "paper", "scissors");
  player2.classList.add(computerChoice);

  showResultScreen();
}

function showResultScreen() {
  // tilføjer .hidden
  winScreen.classList.add("hidden");
  loseScreen.classList.add("hidden");
  drawScreen.classList.add("hidden");

  //En if-sætning der viser hvem har vundet

  /* uafgjort herunder */
  //kan det evt være: if (userChoice === computerChoice){} ?
  //dette drillede lidt tidligere, men at lave en til hver så ikke ud til at løse problemet
  if (userChoice === computerChoice) {
    console.log("Uafgjort");
    drawScreen.classList.remove("hidden");
  }

  //nedenstående kan itteres og gøres mere kompakt = færre linjer - hvis jeg orker (billede-eksempel anno 28/8)

  /** vinder herunder **/
  // kan laves til else if statement efter if-draw-statement
  // der kan bruges: || til at skrive flere instanster/muligheder
  // for at vinde i træk i samme if-statement, som Tanya gjorde
  if (userChoice === "rock" && computerChoice === "scissors") {
    console.log("Du vinder");
    winScreen.classList.remove("hidden");
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    console.log("Du vinder");
    winScreen.classList.remove("hidden");
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    console.log("Du vinder");
    winScreen.classList.remove("hidden");
  }

  /** taber herunder**/
  // kan laves til else statement efter vinderes else if statement,
  // da hvis man ikke er uafgjort eller vinder så taber man
  // dertil vil det ikke være "nødvendigt" at skrive instanserne/mulighederne for at tabe
  if (userChoice === "rock" && computerChoice === "paper") {
    console.log("Du taber");
    loseScreen.classList.remove("hidden");
  }
  if (userChoice === "paper" && computerChoice === "scissors") {
    console.log("Du taber");
    loseScreen.classList.remove("hidden");
  }
  if (userChoice === "scissors" && computerChoice === "rock") {
    console.log("Du taber");
    loseScreen.classList.remove("hidden");
  }
}

//så spillet starter helt forfra
function resetGame() {
  // tilføjer .hidden igen
  winScreen.classList.add("hidden");
  loseScreen.classList.add("hidden");
  drawScreen.classList.add("hidden");

  // fjerner tidligere choice
  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");
}

//computerChoice's hånd stemmer ikke hele tiden oversens med hvad der står i konsol
//dog bliver userChoice vist korrekt og dermed virker spillet ellers

//// NOTER FRA TIMEM ////
// alt skal jo gerne stemme overens - skulle det ske at noget i css-filen ændres vil js være skrøbeligt og muligvis ikke virke
// derfor vil if-sætninger evt kunne rede ens røv (du har et billede som eksempel anno 28/8)

//HUSK at at skive det der står i "" med småt - og at det stemmer overens med css og hmtl

// Alberte prøvede at lavede en funtion til player1/user hvis man skulle vinde
// Hertil vil man kunne bruge return og value i if-statements

// Tanya her som mig draw først i en if-sætning
// dernæst har hun en else if - hvor hun skriver:
/* if (userChoice === computerChoice) {
   console.log("Uafgjort");
    drawScreen.classList.remove("hidden");
  } else if (
   (userChoice === "rock" && computerChoice === "scissors") || 
   (userChoice === "paper" && computerChoice === "rock") || 
   (userChoice === "scissors" && computerChoice === "paper")
){ //her tilføjer hun win-skærm
 console.log("Du vinder");
    winScreen.classList.remove("hidden");
   } else { //der behøves kun ellers til for de resterende 3 udkom da de alle ender i at user taber
      console.log("Du taber");
    loseScreen.classList.remove("hidden");
      }
*/
