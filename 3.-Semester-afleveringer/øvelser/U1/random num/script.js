let randomNumber = Math.floor(Math.random() * 101);
document.getElementById("number").innerHTML = randomNumber;

/* Noter:
Det der står i orange er hvad der står i consol log som tekst inden Math.random-tallet vises
10 = muligheder af tal (fra 0-9)

.floor runder altid ned og laver et rundt/præcist tal - fx. 9.2 = 9
.ciel runder tallet op - fx. 9.2 = 10
.round gør at man "får" et tal mere - fx. ved *2 får man 0-3

Variabler:
ALDRIG brug var - ændre til const eller let
Start altid med at bruge const
Brug let hvis du ved dataen VIL ændre sig
*/
