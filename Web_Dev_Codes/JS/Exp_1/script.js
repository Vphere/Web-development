const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const changeTitleBtn = document.getElementById("changeTitleBtn");
const title = document.getElementById("title");

addBtn.addEventListener("click", function () {

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerText = taskInput.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("class", "delete-btn");

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
});

taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const li = event.target.parentElement;
        taskList.removeChild(li);
    }
});

changeTitleBtn.addEventListener("click", function () {
    title.style.color = "blue";
});