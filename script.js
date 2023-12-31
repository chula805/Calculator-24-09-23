let displayValue = '0';

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = '';
    }
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}
