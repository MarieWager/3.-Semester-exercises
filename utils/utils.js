////// IMPORT LINJEN: //////
//  import { funktion } from "../utils/utils.js";

//Random number:
export function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

//querySelector:
export function $(str) {
  return document.querySelector(`${str}`);
}

//knapper?

//Enable enter button via click
//Enter knap fra tidligere:
/*således kan Enter-knappen bruges, istedet for selve knappen
document.getElementById("input").addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    checkInput();
  }
});*/
//Enter funktion til input-felt (callback = Keyboard Enter bliver trykket -> kør kaldt function)
export function EnterInput(callback) {
  const input = document.getElementById("input");
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      callback(); // Kald den funktion vi sender ind
    }
  });
}

//Når man klikker på keyboard Enter knappen reloader siden
export function EnterReload() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // stopper fx form-submit
      window.location.reload();
    }
  });
}

// klik på - for reload
export function reload() {
  let lastKeyTime = 0; // tid for sidste tastetryk
  const doubleKeyDelay = 300; // maks ms mellem tryk for at tælle som "dobbelttryk"

  document.addEventListener("keydown", (e) => {
    if (e.key === "-") {
      //e.preventDefault(); // stopper fx form-submit
      window.location.reload();
    }
  });
}

//Arrays ?
