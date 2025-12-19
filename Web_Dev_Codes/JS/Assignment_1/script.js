const submitBtn = document.getElementById("submitBtn");
const userNameField = document.getElementById("userNameField");
const techfestForm = document.getElementById("techfestForm");

let isTechfestFormActive = false;

submitBtn.addEventListener("mouseover", function(){
    submitBtn.style.backgroundColor = "green";
});

submitBtn.addEventListener("mouseout", function(){
    submitBtn.style.backgroundColor = "#2563eb";
});

userNameField.addEventListener("blur", function(){
    if (userNameField.value.trim() === "") {
        alert("Please Enter Participant Name as it is required.");
    }
});

techfestForm.addEventListener("input", function(){
    isTechfestFormActive = true;
});

techfestForm.addEventListener("submit", function(event){
    event.preventDefault();     // It will Stop actual submission of form
    isTechfestFormActive = false;
    alert("Thank you for registering for TechFest!");
});

window.addEventListener("beforeunload", function(event){
    if (isTechfestFormActive) {
        event.preventDefault();
        event.returnValue = "";
    }
});