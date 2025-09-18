//en anden måde at lave app'en på
//her viste Kalus hvordan de krydes af (checkbox)
//og hvordan li-elm flyttes til anden liste

const submit = document.querySelector("#submit");
const todoNameInput = document.querySelector("#todo_input");
const todoContainer = document.querySelector("#todo_container");
const doneContainer = document.querySelector("#done_container");

submit.addEventListener("click", subMitTodo);

function subMitTodo() {
  console.log("Det skal virke");

  const li = document.createElement("li");

  li.innerHTML = `<input type="checkBox"><h3>${todoNameInput.value}</h3>`;

  todoContainer.appendChild(li);

  li.addEventListener("click", () => {
    console.log("Parent elm: ", li.parentElement.id);

    //her flyttes der fra første liste til done-liste
    if (li.parentElement.id === "todo_container") {
      todoContainer.removeChild(li);
      doneContainer.appendChild(li);
      console.log("task er færdig");
    } else {
      todoContainer.appendChild(li);
      doneContainer.removeChild(li);
      console.log("jeg er task'en er flyttet tilbage");
    }
  });
}
