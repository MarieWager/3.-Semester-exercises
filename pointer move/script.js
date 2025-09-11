//// Lav en html side der detekterer musens X-position og opdaterer en CSS custom property der styrer lightness i en HSL color. ////

let bgColor = document.querySelector("main");

/*
// ændre baggrundsfarve mellem vilkårelige farver
bgColor.addEventListener("mousemove", function (e) {
  console.log(bgColor);
  let x = e.offsetX;
  let y = e.offsetY;
  bgColor.style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
});*/

//ændre opacitet på én enkelt farve
bgColor.addEventListener("mousemove", function (e) {
  const width = bgColor.clientWidth;
  const x = e.offsetX;

  // regn en værdi mellem 0 og 1 ud
  const opacity = (x / width) * 100;

  // opdater CSS variablen
  bgColor.style.setProperty("--opacity", `${opacity}%`);
});
