const TODO_KEY = "todos";

const toDoForm = document.querySelector(".list-wrap form");
const toDoInput = toDoForm.querySelector("input");
const toDoBox = document.querySelector(".list-wrap ul");

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
  li.remove();
}
function paintToDo(todo) {
  const list = document.createElement("li");
  list.id = todo.id;
  const txt = document.createElement("p");
  const btn = document.createElement("button");
  btn.addEventListener("click", deleteToDo);
  list.appendChild(txt);
  list.appendChild(btn);
  txt.innerText = todo.text;
  toDoBox.appendChild(list);
}
function setToDoList(e) {
  e.preventDefault();
  const toDoList = toDoInput.value;
  toDoInput.value = "";
  const toDoObj = {
    text: toDoList,
    id: Date.now(),
  };
  toDos.push(toDoObj);
  paintToDo(toDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", setToDoList);

const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
