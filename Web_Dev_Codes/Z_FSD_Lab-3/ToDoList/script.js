const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

let todos = [];

window.onload = () => {
    todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => createTodo(todo));
};

addBtn.addEventListener("click", addTodo);

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") addTodo();
});

function addTodo() {
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a task");
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(todo);
    saveTodos();
    createTodo(todo);

    input.value = "";
}

function createTodo(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    const span = document.createElement("span");
    span.textContent = todo.text;

    if (todo.completed) {
        li.classList.add("completed");
    }

    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        li.classList.toggle("completed");
        saveTodos();
    });

    const removebtn = document.createElement("button");
    removebtn.textContent = "X";

    removebtn.addEventListener("click", function () {
        todos = todos.filter(t => t.id !== todo.id);
        saveTodos();
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removebtn);
    list.appendChild(li);
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
