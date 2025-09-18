//to-do array
const toDoArr = [];

//const found =

const submit = document.querySelector("#submit");
const todoNameInput = document.querySelector("#input");
const todoContainer = document.querySelector("#todo_container");

submit.addEventListener("click", subMitTodo);

function subMitTodo(evt) {
  const todoObj = {
    name: todoNameInput.value,
    id: self.crypto.randomUUID(),
    done: false,
  };
  toDoArr.unshift(todoObj);
  console.log("toDoArr 1 ", toDoArr);
  writeTodos();
}

// li-elementer udskrives til html/DOM
function writeTodos() {
  todoContainer.innerHTML = "";
  toDoArr.forEach((todoObj) => {
    console.log(todoObj);
    let isChecked;
    if (todoObj.done === true) {
      isChecked = "checked";
    } else {
      isChecked = "";
    }

    todoContainer.innerHTML += `
    <li data-id=${todoObj.id}> 
    <input type="checkBox" name="scales" ${isChecked} />
    <h2>${todoObj.name}</h2></li>`;
  });
  todoContainer.querySelectorAll("li").forEach((li) => {
    //console.log(li)
    const checkBox = li.querySelector("input");
    li.addEventListener("click", (evt) => {
      evt.preventDefault();
      const corDataObj = toDoArr.find((toDo) => toDo.id === li.dataset.id);
      // ! gør at det bliver sat til det modsatte (lidt som .toggle)
      corDataObj.done = !corDataObj.done;
      console.log("evt.target.parentElement.dataset.id", corDataObj);
      console.log("toDoArr 2 ", toDoArr);

      writeTodos();
    });
  });
}
