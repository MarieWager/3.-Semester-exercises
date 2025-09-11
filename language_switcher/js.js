import { $ } from "../utils/utils.js";

//const language = document.querySelector(".language");

document.querySelector(".language").addEventListener("change", (event) => {
  //console.log(texts["da"]);
  console.log("result", event.target.value);

  //$("header", "p", "footer").textContent = texts;

  switchLan(event.target.value);
});

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

//const locale = "da";
//console.log(texts[locale]);

switchLan();
function switchLan() {
  texts[locale].texts.forEach((each) => {
    console.log("each", each);
    document.querySelector(each.location).textContent = each.text; //tekst sættes ind
  });
  klik();
}

// klik - then switch
function klik() {
  console.log("der klikkes");

  document.querySelector(".language").addEventListener("click", klik);

  //change event med if-statement??
  if (klik === "de") {
    switchLan("de");
    document.querySelector(".language").value = "de";
  } else {
    switchLan("da");
    document.querySelector(".language").value = "da";
    //console.log(texts["da"]); //dette kan også skrives som:
    //console.log(texts[locale].texts); //således kan const locale skiftet fra/mellem variabler; "da" til/og "de"
    //$("header", "p", "footer").textContent = texts; //skulle gerne på en eller anden måde ændre indholdet (teksterne) på sitet
  }
}

/*function changeLan() {
  console.log("sproget ændres");

  locale = "de";

  language.addEventListener("change", (event) => {
    //console.log(texts["da"]);
    console.log(texts["de"]);

    $("header", "p", "footer").textContent = texts;

    lable.textContent = event.target.value;
  });
}*/
