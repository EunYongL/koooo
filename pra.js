const todoinput = document.querySelector("#todoInput")
const addbutton = document.querySelector("#addButton")
const todolist = document.querySelector("#todoList")

addbutton.addEventListener('click', function () {
  const value = todoinput.value
  if (value !== '') {
    const todo = document.createElement('li');
    todo.textContent = value;
    todolist.appendChild(todo);
    todoinput.value = ''
  }
})
