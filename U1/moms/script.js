"use strict";

function momsBeregner(beloeb, moms = 25) {
  return beloeb + (beloeb * moms) / 100;
}

let resulat = momsBeregner(1234);
console.log("Beløbet med moms:", resulat);

/// NOTER ///
/*function momsBeregner(beloeb, moms = 25) {
  console.log("Beløbet med moms:", beloeb + (beloeb * moms) / 100);
}

momsBeregner(3487845423896, 25);*/
