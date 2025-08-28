"use strict";

//computerens gæt (1-100)
let minNum = 1;
let maxNum = 100;
let computerNumber;

//const til knapper
const btnStart = document.querySelector("#start");
const btnLow = document.querySelector("#low");
const btnHigh = document.querySelector("#high");
const btnCorrect = document.querySelector("#correct");

function computerGuess() {
  computerNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; //regnestykket: (100 - 1 + 1) + 1
  // funktionen er til for at user således skal trykke på start
  // for at få et gæt fra computeren, og kan derfor bestemme sit
  // tal inden spillet begynder
  // funtionen gør også at hele "regnestykket" ikke skal være i knapperne
  // dertil gør det også computerens gæt vilkårlig
  // så /2 ikke skal efter, havde "regnestykket" været der
}

//Start/spil igen knap //her skal der også "nulstilles"
btnStart.addEventListener("click", klik_btnStart);

function klik_btnStart() {
  console.log("Spillet starter");
  // ved at have min og max med nulstiller det spillet, hvis man klikker på knappen
  minNum = 1;
  maxNum = 100;

  computerGuess();
  document.getElementById("number").innerHTML = computerNumber;
}

/// NOTER ///
//de andre knapper - der skal bruges addEventListener
/////Når man klikker skal computerens valg ændre sig accordingly
//////altså gætte på tal højere hvis man trykker på btnLow
///////og gærre på tal lavere tal hvis man trykker på btnHigh
////////der skal være ny min/max-værdi efter klikket som skal beregnes efter seneste gæt
/////////der skal bruges if-statements?

btnLow.addEventListener("click", klik_btnLow);
function klik_btnLow() {
  console.log("Computerens gæt var for lavt");

  minNum = computerNumber + 1; //tal højere end "userTallet" skæres fra

  computerGuess();
  document.getElementById("number").innerHTML = computerNumber;
}

btnHigh.addEventListener("click", klik_btnHigh);
function klik_btnHigh() {
  console.log("Computerens gæt var for højt");

  maxNum = computerNumber - 1; //tal lavere end "userTallet" skæres fra

  computerGuess();
  document.getElementById("number").innerHTML = computerNumber;
}

btnCorrect.addEventListener("click", klik_btnCorrect); //ved dette klik "vinder" computeren - skal der evt være en animation??
function klik_btnCorrect() {
  console.log("Computerens gæt var for korrekt", computerNumber);
  document.getElementById("number").innerHTML = "" + computerNumber + " og det var rigtigt!!!";
}
