"use strict";
import { getRandomNum } from "../utils/utils";

//#1

/*function greeting(firstName) {
  return `Hello ${firstName}`; //for the backwards `` = hold shift and click button after ? twice and two apeer
}

const result = greeting("Beatte");

console.log(result);*/

//#2 uden parameter
/*function greeting(anyName) {
  return `Hello ${anyName}`; //for the backwards `` = hold shift and click button efter ?
}

const txt = `Greeting is ${greeting("Birgitte")}`;

console.log(txt);*/

//#3 lidt til hvor/hvordan funktion og return fra eksempler kan
// implementeres til at gæt ét random tal (derfor const) med random.math funktion
// kunne være smart hvis det kan/vil virke til fx moms beregneren

//har kopieret dette ind i utils.js
/*function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}*/

const myRandomNum = getRandomNum(100);

console.log("getRandomNum fra 0 til 100 ", myRandomNum);
