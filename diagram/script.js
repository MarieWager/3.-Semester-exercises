import { getRandomNum } from "../utils/utils.js"; //Husk.js til sidst

/// KRAV ///
// Antallet af kunder skal være en værdi mellem 0 og 100

// Der skal vises 20 søjler og den yderst til højre skal være den nyeste.
// Det kan godt være at diagrammet først skal fyldes før du når op på 20 søjler,
// det kommer an på hvordan du laver det.
// En ny måling/søjle skal tilføjes hvert sekund.

/// Begynd med: ///
// Start fx med at sætte en setInterval op der generer en ny søjle.
// Du skal finde en måde at holde styr på når der er flere søjler end 20,
// så skal du begynde at fjerne dem igen.

const list = document.querySelector("ul");
//tænker det er på denne der skal være max 20,
// da den viser 'hele' listen, mens li 'kun' er en enkelt søjle

const li = document.createElement("li");
li.style.setProperty("--height", getRandomNum(100));
list.appendChild(li);
setInterval(genChart, 1000); //1000=1sek

function genChart() {
  console.log("genChart");
  const li = document.createElement("li");
  li.style.setProperty("--height", getRandomNum(100)); //getRandomNumber fra utils - husk at kalde max
  list.appendChild(li);
  removeChart(); //her kaldes funktionen forneden
}

function removeChart() {
  if (list.children.length > 20) {
    //hvis listens længde af children må ikke gå over 20
    list.removeChild(list.firstElementChild); //så fjerner den et child - som vil være det første - igen og igen
  }
  console.log(list.children.length); //det virkede først efter jeg skev console.log ind
}

//if sætning til når den er nået 20 søjler = true
//så når max = 20 så .remove med 'shift'
//lav konst til søjlerne/list

//lav en funktion til fjern-søjler
//så i if-sætning kald fjern-søjler funktion

/// ELLER ///
// Hvis du vil arbejde med DOM’en på en anden måde kan du udkommentere
// linje 3 til 5 i javaScripten og indkommentere li’erne i HTML’en
// og linje 12 i CSS’en så har du 20 søjler du kan arbejde med.
// Så kan du jo lave et array med 20 værdier
// og lave en funktion der viser disse 20 værdier til en start.
// Lav en setInterval der opdaterer array’et og få dem vist.
