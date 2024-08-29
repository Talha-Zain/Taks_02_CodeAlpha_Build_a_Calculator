function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').innerText;
    document.getElementById('display').innerText = currentDisplay.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function calculateResult() {
    let currentDisplay = document.getElementById('display').innerText;
    try {
        let result = eval(currentDisplay);
        document.getElementById('display').innerText = result;
    } catch (error) {
        document.getElementById('display').innerText = "Error";
    }
}

let logo = document.getElementsByClassName('logo-btn')[0];
logo.disabled = true;

