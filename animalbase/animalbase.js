"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons
  regBtns();
  loadJSON();
}

function regBtns() {
  //for filter
  document.querySelectorAll("[data-action='filter']").forEach((button) => button.addEventListener("click", selectFilter));
  //for sort
  document.querySelectorAll("[data-action='sort']").forEach((button) => button.addEventListener("click", selectSort));
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

/// Animalebase video 00 -> ("hardcoding") opdeler array med substring (object-handling in arrays): start til minut 13///
function prepareObjects(jsonData) {
  allAnimals = jsonData.map(prepareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

// Animalebase video 00 -> i stedet for "hardcoding": 15:00 - 18:00
function prepareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

///user interactivity //select filter (for the buttons)
function selectFilter(event) {
  const filter = event.target.dataset.filter;
  console.log(`User selected ${filter}`);
  filterList(filter);
}

///filter for animals
function filterList(filterBy) {
  let filteredList = allAnimals; //would return the whole list by deafualt if no further filtering
  //therefore making if-statement:

  if (filterBy === "cat") {
    //create filtered list for only cats
    filteredList = allAnimals.filter(isCat);
  } else if (filterBy === "dog") {
    //create filtered list for only dogs
    filteredList = allAnimals.filter(isDog);
  }
  //and if neither cat or dog shows whole list as 'default' -> i.e. all the animals (consol.log shows: *)
  displayList(filteredList);
}

function isCat(animal) {
  //instead of if-statement:
  return animal.type === "cat";
}

///filter only dogs

function isDog(animal) {
  //instead of if-statement:
  return animal.type === "dog";
}

///user interactivity //select sort (for the buttons)
function selectSort(event) {
  const sortBy = event.target.dataset.sort;
  console.log(`User selected ${sortBy}`);
  sortList(sortBy);
}

function sortList(sortBy) {
  let sortedList = allAnimals;
  //sorts by property
  sortedList = sortedList.sort(sortByProperty);

  function sortByProperty(animalA, animalB) {
    console.log(`sortBy is ${sortBy}`);
    if (animalA[sortBy] < animalB[sortBy]) {
      return -1;
    } else {
      return 1;
    }
  }

  //denne function vil være den samme for sortByName
  /*function sortByType(animalA, animalB) {
        console.log(`sortBy is ${sortBy}`);
    if (animalA.type < animalB.type) {
      return -1;
    } else {
      return 1;
    }
  }*/

  displayList(sortedList);
}

//viser listen af alle dyr/animals
function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

//viser enkelt dyr/animal
function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

///a generic sort function?

///change sort-direction

//and last combine the them -> filter + sorting (will cause isses/problems)
