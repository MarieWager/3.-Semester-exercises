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
      document.getElementById("input").value = "";
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

      /*nulstiller input og generere nyt tal - så man a´kan spille igen*/
      randomNumber = Math.floor(Math.random() * heighestNumber);
      document.getElementById("input").value = "";
      console.log(randomNumber);
    }
  } else {
    /*hvis der tastet andet end et tal*/
    document.getElementById("result").innerHTML = "Indtastet er ikke et tal, prøv igen";
  }
}

/*således kan Enter-knappen bruges, istedet for selve knappen*/
document.getElementById("input").addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    checkInput();
  }
});
