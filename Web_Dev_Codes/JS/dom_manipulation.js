const btn = document.getElementById("btnAdd");
const ul = document.getElementById("myList");

let count = 3;

btn.addEventListener("click",()=>{
    const li = document.createElement("li");
    li.textContent = "Item " + count++;
    li.classList.add("list");
    ul.appendChild(li);
});

const btnRemove = document.getElementById("btnRemove");
btnRemove.addEventListener("click",()=>{
    if(ul.lastElementChild){
        ul.removeChild(ul.lastElementChild);
        count--;
    }
});