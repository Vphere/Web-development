const input = document.getElementById("api");
const addBtn = document.getElementById("addbtn");
const info = document.getElementById("getinfo");

addBtn.addEventListener("click", displayinfo);

function displayinfo(){
    const text = input.value.trim();
    console.log(text);
    if(text === ""){
        alert("enter api");
        return;
    }

    fetch(text)
        .then(response => {
            if (!response.ok) {
                throw new Error("Invalid API");
            }
            return response.json();
        })
        .then(data => {
            const print = document.createElement("pre");
            print.textContent = JSON.stringify(data);
            info.appendChild(print);
        })
        .catch(error => {
            const err = document.createElement("div");
            err.textContent = error.message;
            info.appendChild(err);
        });
}