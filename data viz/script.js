//Din opgave er at visualisere attributen inQueue

let lastNum = null; //husker det sidst viste tal - gør så animationen matcher med at vokse

setInterval(getJSON, 3000); //10000=10sek

async function getJSON() {
  const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
  const data = await response.json();
  showData(data.inQueue);
}

function showData(number) {
  console.log("taller er: ", number);

  const screenNum = document.querySelector(".number");

  screenNum.textContent = number;

  //tilføjer pop-animation fra CSS
  screenNum.classList.add("pop");

  //fjerner pop-animation når transition er færdig
  screenNum.addEventListener(
    "transitionend",
    () => {
      screenNum.classList.remove("pop");
    },
    { once: true }
  );

  //gemmer det nye tal
  lastNum = number;
}
