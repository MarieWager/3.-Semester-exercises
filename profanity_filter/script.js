//byt de "dårlige" ord ud med de gode

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let isClicked = false;
document.querySelector("button").addEventListener("click", klik);

function klik() {
  console.log("der klikkes");
  if (isClicked === true) {
    console.log("Du har allerede klikket"); //skulle gerne være til hvis man allerede har klikket på knappen - vis evt en boks med user allerede har klikket
  } else {
    isClicked = true;
  }
}

function makeSafe() {}
