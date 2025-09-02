const animal = [
  {
    name: "Mandy",
    type: "cat",
  },
  {
    name: "Mia",
    type: "cat",
  },
  {
    name: "Mona",
    type: "dog",
  },
  {
    name: "Moony",
    type: "dog",
  },

  {
    name: "Harold",
    type: "frog",
  },
];

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

function isDog(animal) {
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}

function all(animal) {
  return true;
}

function none(animal) {
  return false;
}

const onlyCats = animal.filter(isCat);
//const onlyDogs = animal.filter(isDog);

console.log("animal type", onlyCats);
console.log("animal type", animal.filter(isDog)); //her undgår man at skulle lave en "ny" variabel
