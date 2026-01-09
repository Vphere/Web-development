const tempSelect = document.getElementById("tempUnit");
tempSelect.addEventListener("change", () => {
    localStorage.setItem("tempUnit", tempSelect.value);
});

const tripNote = document.getElementById("tripNotes");
tripNote.addEventListener("input", () => {
    sessionStorage.setItem("tripNote", tripNote.value);
});

window.onload = function () {
    const storedUnit = localStorage.getItem("tempUnit");
    const storedTrip = sessionStorage.getItem("tripNote");

    if (storedUnit !== null) {
        tempSelect.value = storedUnit;
    }

    if (storedTrip !== null) {
        tripNote.value = storedTrip; 
    }
};

const weatherInfo = document.getElementById("weatherInfo");
fetch("https://api.open-meteo.com/v1/forecast?latitude=22.6939&longitude=72.8616&current=temperature_2m,wind_speed_10m&timezone=auto")
    .then(response => response.json())
    .then(data => {

        let temperature = data.current.temperature_2m; 
        const windSpeed = data.current.wind_speed_10m;
        const unit = localStorage.getItem("tempUnit");
        let symbol = "°C";

        if (unit === "fahrenheit") {
            temperature = (temperature * 9 / 5) + 32;
            symbol = "°F";
        }

        weatherInfo.innerText = "Current Weather in Nadiad: " + temperature + " " + symbol +
                                " with wind speeds of " + windSpeed + " km/h";
    });