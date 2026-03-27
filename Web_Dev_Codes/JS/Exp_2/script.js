const input = document.getElementById('inputtxt');
const btn = document.getElementById('subbtn');
const output = document.getElementById('info');

const fetchData = async () => {

    const url = input.value.trim();

    if (url === "") {
        output.value = "Please enter a valid URL";
        return;
    }

    try {
        output.value = "Loading...";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const data = await response.json();

        output.value = JSON.stringify(data, null, 2);
    } 
    catch (error) {
        output.value = "Error while fetching data:\n" + error.message;
        console.error(error); 
    }
};

btn.addEventListener('click', fetchData);