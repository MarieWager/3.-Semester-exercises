import { EnterInput } from "../utils/utils.js"; //Husk.js til sidst
const heighestNumber = 100;
let randomNumber = Math.floor(Math.random() * heighestNumber);
document.getElementById("number").innerHTML = heighestNumber;

function checkInput() {
  /*parseInt: konvertere en string til heltal*/
  let inputNumber = parseInt(document.getElementById("input").value);
  console.log(randomNumber);

  /*Number.isInteger: tjekker om værdien er et heltal*/
  if (Number.isInteger(inputNumber)) {
    if (inputNumber < randomNumber) {
      /*less than*/
      document.getElementById("result").innerHTML = inputNumber + " er for lavt, prøv igen";
      document.getElementById("input").value = ""; /*nulstiller input*/
    } else if (inputNumber > randomNumber) {
      /*higher than*/
      document.getElementById("result").innerHTML = inputNumber + " er for højt, prøv igen";
      document.getElementById("input").value = "";
    } else {
      /*correct*/
      document.getElementById("result").innerHTML = "Du vandt!!! Det korrekt tal var:  " + inputNumber + ", prøv igen";

      /*animation*/
      document.getElementById("box").classList.add("winner");
      document.getElementById("box").addEventListener(
        "animationend",
        function () {
          document.getElementById("box").classList.remove("winner");
        },
        { once: true }
      );

      /*nulstiller og generere nyt tal - så man a´kan spille igen*/
      randomNumber = Math.floor(Math.random() * heighestNumber);
      document.getElementById("input").value = "";
      console.log(randomNumber);
    }
  } else {
    /*hvis der tastet andet end et tal*/
    document.getElementById("result").innerHTML = "Indtastet er ikke et tal, prøv igen";
  }
}

/*således kan Enter-knappen bruges, istedet for selve knappen
document.getElementById("input").addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    checkInput();
  }
});*/
//Fra utils:
EnterInput(checkInput);

/* HVAD DER BLEV VIST I UNDERVISNINGEN */
/***
"use strict";

const btn = document.querySelector("button")

const input = document.querySelector("input")

const h2 = document.querySelector("h2")

** man kan hard-code tallet **
const computerNum = Math.floor(Math.random()*100)+1;

** dette behøves ikke - istedet kan det tilføjes
'const' foran 'brugerGuess = input.value;' på linje 72 **
let brugerGuess ;

** tilføjer en funtion til knappen **
btn.addEventListener("click",klik_btn)
funtion klik_btn() {

brugerGuess = input.value;

console.log("KLIK", computerNum)
** 'if' = hvis det ikke er det her, så kan det være 'else if',
   hvis det er hverken af de to må det være 'else' (altså det rigtige resultat),
   derfor "behøves" der heller ikke at skrives noget i paranteserne efter 'else'
**
  
if (brugerGuess<computerNum){
  feedbackText="Det er for lavt prøv igen"}

  else if(brugerGuess>computerNum){
  feedbackText="Det er for højt prøv igen"}

  else{
    feedbackText="Du har gættet rigtigt"}

** nu til at få feedbackText ud på frontface **
h2.textContent = feecbacktext
console.log(feedbackText)

}
 
 
***/
