import { $, EnterInput } from "../utils/utils.js";

///////   array for to-do/tasks   ///////
const taskArr = JSON.parse(localStorage.getItem("taskArr")) || [];
///breakdown:
///// JSON.parse() : turns the string (from storage) into a JS array
///// localStorage.getItem("taskArr") : brings saved string from storage
///// || [] : ensures that taskArr is an empty array (if nothing saved i.e. null)

///////   theme switcher (data-filter)   ///////
const switchTheme = $(".theme");

switchTheme.addEventListener("change", (e) => {
  console.log("Theme selecter activated");
  const chosenTheme = e.target.value;
  document.body.setAttribute("data-filter", chosenTheme);
  localStorage.setItem("theme", chosenTheme); //saving chosen theme in storage
  console.log("Theme changed to:", chosenTheme);
});

///////   fave sortering   ///////
const faveBtn = $("#faveBtn");
let faveSortActive = false;

faveBtn.addEventListener("click", () => {
  console.log("Sort favorites activated");

  faveSortActive = !faveSortActive;
  faveBtn.textContent = `Favorite ${faveSortActive ? "Sort" : "Unsort"}`;
  console.log(`Favorite ${faveSortActive ? "Sort" : "Unsort"}`);

  localStorage.setItem("faveSortActive", JSON.stringify(faveSortActive)); //saves/remember placements and if the button was active or not

  sortTasks();
});

function sortTasks() {
  if (!faveSortActive) return;

  [taskList, doneList].forEach((ul) => {
    const items = Array.from(ul.querySelectorAll("li"));
    items.sort((liA, liB) => {
      const aFave = liA.querySelector(".starBtn")?.textContent === "★";
      const bFave = liB.querySelector(".starBtn")?.textContent === "★";
      if (aFave === bFave) return 0;
      return aFave ? -1 : 1; //places filled star before empty star
    });
    items.forEach((li) => ul.appendChild(li));
  });
}

///////   list elements from HTML   ///////
const taskInput = $("#task-input"); //this the input field - where we write

const taskList = $("#task-list"); //the ul where our list (and task/li-elements) will be shown

const doneList = $("#done-list"); //the ul where our done/completed task/li-elements will be shown

const resetBtn = $("#resetBtn"); //input reset (button) will delete entire to-do list (all elements/tasks - completed or not)

const addBtn = $("#addBtn"); //submit button (add a task)

///////   reset button   ///////
resetBtn.addEventListener("click", resetList);

function resetList() {
  console.log(`Reset button will ${resetBtn.value} -> You have to confirm`);
  const resectConfirmed = confirm("Do you want to delete all tasks?"); //"window" opens - click 'ok' or 'annuller'
  console.log("You have confirmed");
  if (resectConfirmed) {
    //if 'ok' the entire list (both ul's) is removed
    taskList.innerHTML = "";
    doneList.innerHTML = "";
    taskArr.length = 0; //clearing the array
    localStorage.removeItem("taskArr"); //empties storage
    console.log("All tasks have been removed");
  } else {
    //if 'annuller' the li-element is not removed
    console.log("Reset cancelled");
  }
}

///////   add button + enter   ///////
addBtn.addEventListener("click", addTask); //when it "hears"(detects) click on button connects to 'addTask' (affixing (new) written task)

EnterInput(addTask); //from utils.js: keydown event = (keyboard)enter (callback = function you want to happen when 'enter')

//function to make the button and enter viable
function addTask() {
  if (taskInput.value === "") {
    //wont "allow" empty task/li
    alert("You have to write a task");
    console.log("Empty task is not permissible");
  } else {
    //info of the task: name & randomUUID so each li-element gets/has a unique ID
    const taskInfo = {
      name: taskInput.value,
      id: self.crypto.randomUUID(),
      done: false,
      fave: false,
    };
    createLiTask(taskInfo);
    taskArr.push(taskInfo);

    //saveTasks();
    console.log("The task is: ", taskInput.value);
  }
  taskInput.value = ""; //returns the input field as empty after task is added
}

///////   create task/li for ul (to be shown in the HTML/DOM)   ///////
function createLiTask(taskInfo) {
  //create li-element
  const li = document.createElement("li");
  li.setAttribute("data-id", taskInfo.id); // data-id : calls the id from taskInfo, which is a randomUUID

  //the li-variable is "put into" the html ("creating" <li></li>) and is equal to taskInput(i.e. the input field aka what the user writes)
  li.innerHTML = `
  <input type="checkbox" ${taskInfo.done ? "checked" : ""}>
  <h3>${taskInfo.name}</h3>
  <button class="starBtn">${taskInfo.fave ? "★" : "☆"}</button>
  <button class="removeBtn">X</button>`; //class because html likes that better
  ///breakdown:
  ///// checkbox : has a ternary operator (sorta if-else) - taskInfo.done (false) = conditon - if box is "checked" = true - else box empty = false

  console.log(`The task: ${taskInfo.name}'s id: ${taskInfo.id}`); //calls for the id to be shown in console

  //append/attach li-element as a "child" to either ul
  if (taskInfo.done) {
    doneList.appendChild(li);
  } else {
    taskList.appendChild(li);
  }
  //taskList.appendChild(li);

  /////   checkbox + li movement   /////
  const checkbox = li.querySelector("input[type='checkbox']"); //gets checkbox from li.innerHTML
  checkbox.addEventListener("click", () => {
    console.log("You have marked", checkbox.type);
    taskInfo.done = checkbox.checked; //check/unchecks (done or not) = movement between ul-list
    if (taskInfo.done) {
      taskList.removeChild(li);
      doneList.appendChild(li);
      console.log(`The task: ${taskInfo.name} is completed`);
    } else {
      doneList.removeChild(li);
      taskList.appendChild(li);
      console.log(`The task: ${taskInfo.name} has been 'unchecked'`);
    }
    sortTasks();
    saveTasks();
  });

  /////   star button - favorite a li/task  /////
  const star = li.querySelector(".starBtn"); //gets btn's class from li.innerHTML
  star.addEventListener("click", () => {
    if (star.textContent === "☆") {
      star.textContent = "★";
      taskInfo.fave = true;
      console.log(taskInfo.name, "Favorited!");
    } else {
      star.textContent = "☆";
      taskInfo.fave = false;
      console.log(taskInfo.name, "Unfavorited!");
    }
    sortTasks();
    saveTasks();
  });

  /////   remove button - remove/delete a li/task  /////
  const removeBtn = li.querySelector(".removeBtn"); //gets btn's class from li.innerHTML
  removeBtn.addEventListener("click", (event) => {
    console.log("Remove button activated -> You have to confirm");
    //i want to add a confirm - so the user has to "verify" that they want to remove/delete a task
    //i tried just writing confirm in the if(..), but that checked the confirm itself which removed the li even if 'annuller',
    //why? because the function is always true/truthy - therefore the li kept being removed
    //so - I created a variable/const which makes it possible to return the window's 'clicked' value
    const confirmed = confirm(`Do you want to delete "${taskInfo.name}"?`); //"window" opens - click 'ok' or 'annuller'
    if (confirmed) {
      li.remove(); //if 'ok' task is removed

      //also removes from array (so it doesnt show if page reload)
      const arrIndex = taskArr.findIndex((task) => task.id === taskInfo.id); //finds index of task in order to remove
      if (arrIndex !== -1) taskArr.splice(arrIndex, 1); //removes the task

      console.log(`The task: ${taskInfo.name}, with the id: ${taskInfo.id} has been removed`);
      saveTasks();
    } else {
      //if 'annuller' the li-element is not removed
      console.log("Remove cancelled");
    }
  });

  saveTasks();
}

///////   save tasks (and changes) to localStorage   ///////
//in order to do so the function has to be 'called' for every 'change' there is
function saveTasks() {
  localStorage.setItem("taskArr", JSON.stringify(taskArr)); //saves the all content within main in the browser as the taskArr (which is why stringify is used - to make the array into strings)
}

///////   load/show the data   ///////
//if the page is refreshed only the (current) list(s) and its element are saved and will be shown
function loadTasks() {
  taskArr.forEach((task) => createLiTask(task));
  console.log("taskArr", taskArr);
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.setAttribute("data-filter", savedTheme);
  switchTheme.value = savedTheme;
}

const savedFaveSort = localStorage.getItem("faveSortActive");
if (savedFaveSort !== null) {
  faveSortActive = JSON.parse(savedFaveSort);
  faveBtn.textContent = `Favorite ${faveSortActive ? "Sort" : "Unsort"}`;
  if (faveSortActive) sortTasks();
}

loadTasks();
