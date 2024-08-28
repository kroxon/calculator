
let numberA = 0;
let numberB = 0;
let result = 0;
let operator = "+";

const bigDisplay = document.querySelector(".main");
const smallDisplay = document.querySelector(".support");

function operate() {
    switch (operator) {
        case '+':
            result = numberA + numberB;
            break;
        case '-':
            result = numberA - numberB;
            break;
        case '×':
            result = numberA * numberB;
            break;
        case '÷':
            result = numberA / numberB;
            break;
    }
}

function updateOperator(operator) {
    updateNumberA()
    smallDisplay.textContent = `${firstNumber} ${operator}`;
    // to do
    console.log("updateOperator to do");
}

function updateNumberA() {
    // to do
    console.log("updateNumberA to do");
}

function updateNumberB() {
    // to do
    console.log("updateNumberB to do");
}

function getDisplay() {
    return bigDisplay.textContent;
}

function updateMainDisplay(symbol) {
    let input = getDisplay();
    if (symbol === ".") {
        if (input === "0")
            bigDisplay.textContent = "0.";
        else if (!input.includes("."))
            bigDisplay.textContent = input + ".";
    } else if (input === "0")
        bigDisplay.textContent = symbol;
    else
        if (input.length < 11)
            bigDisplay.textContent = input + symbol;
    updateNumberA();
    console.log("updateMainDisplay: " + getDisplay());
}

function updateSupportDisplay(text) {
    // to do
    console.log("updateSupportDisplay to do");
}

function backspace() {
    // to do
    console.log("backspace to do");
}

function clearDisplays() {
    smallDisplay.innerHTML = "\&nbsp;";
    bigDisplay.textContent = 0;
    numberA = 0;
    numberB = 0;
    result = 0;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        if (e.target.className === 'number') {
            console.log(e.target.textContent + " number");
            updateMainDisplay(e.target.textContent);
        }
        else if (e.target.className === 'operator') {
            console.log(e.target.textContent + " operator");
            updateOperator(e.target.textContent);
        }
        else {
            console.log(e.target.textContent + " action");
            if (e.target.textContent === "AC") {
                clearDisplays();
            }
            if (e.target.textContent === "backspace") {
                backspace();
            }
        }
    })
});

getDisplay();