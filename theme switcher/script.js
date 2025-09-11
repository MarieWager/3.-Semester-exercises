const switchTheme = document.querySelector(".theme");

switchTheme.addEventListener("change", (e) => {
  document.body.setAttribute("data-filter", e.target.value);
  console.log(switchTheme.value);
});

console.log("data filter skiftes");
