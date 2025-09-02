import { $ } from "../utils/utils.js";

//Dette array repræsenterer trinene i vores breadcrumb-navigation.
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

//det sidste link skal ikke være klikbart - da det vil være ens "position" på et site

$("button").addEventListener("click", klik);

function klik() {
  let str = "";

  console.log(str);

  //sæt str's ind i .forEach - så man kan blive ved med at lægge/pluse til
  //check/kig på index altså 'i'/[i] i .forEach -> kig på if-statement
  bc.forEach((elm, i) => {
    //if-statement til sidste element, istedet for "blot" at skrive 2(som ville være det sidste - fordi nulindex: 0,1,2)
    //tilføjer vi bc (vores const) og .length (længden, som nu evt kan være "vilkårlig") og -1(for at fjerne den sidste element som en mulighed)

    if (i === bc.length - 1) {
      //sidste element skal ikke være et link
      str += `<li>/${elm.name}</li>`;
    } else {
      //a-tags kreerer links for hver bc-element
      //der skal være li også
      str += `<li>/<a href="">${elm.name}</a></li>`; // += er konkatinering
    }

    /// STYLING ??? ///
    //bc.elm.name.style("---color", `rgb(0,0,0)`);
  });
  //console.log(str);
  //henter "ul" fra html'en og sætter det til at være str
  $("ul").innerHTML = str;

  // skal trueLink(); være inde i klik()? eller inde i .forEach??
}
