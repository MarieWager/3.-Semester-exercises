document.querySelector("button").addEventListener("click", klik);

function klik() {
  console.log(document.querySelector("h1").dataset.filter); //h1 fordi det er det data-filteret er
  if (document.querySelector("h1").dataset.filter === "fox") {
    document.querySelector("h1").dataset.filter = "bat";
  } else {
    document.querySelector("h1").dataset.filter = "fox";
  }
}
console.log("der trykkes på ", klik());
