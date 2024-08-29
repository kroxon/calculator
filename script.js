
let numberA = null;
let numberB = null;
let result = null;
let firstOperator = "";
let secondOperator = "";

const bigDisplay = document.querySelector(".main");
const smallDisplay = document.querySelector(".support");

function operate() {
    numberA = parseFloat(numberA) || 0;
    numberB = parseFloat(numberB) || 0;

    switch (firstOperator) {
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
    let input = getDisplay();

    if (operator !== "=") {
        if (numberA != null && input !== "") {
            updateNumberB();
            operate();
            firstOperator = operator;
            numberA = result;
            result = null;
            numberB = null;
            clearBigDisplay();
            updateSupportDisplay();
        } else if (numberA != null && input === "") {
            firstOperator = operator;
            updateSupportDisplay();
        } else if (numberA == null) {
            updateNumberA();
            firstOperator = operator;
            clearBigDisplay();
            updateSupportDisplay();
        }
    } else if (operator === "=") {
        if (numberA != null && input === "") {
            bigDisplay.textContent = numberA;
            numberA = null;
            firstOperator = "";
            updateSupportDisplay();
        } else if (numberA != null && input != "") {
            updateNumberB();
            operate();
            bigDisplay.textContent = result;
            numberA = null;
            numberB = null;
            result = null;
            firstOperator = "";
            updateSupportDisplay();
        }
    }

    console.log("updateOperator to do");
}


function updateNumberA() {
    numberA = getDisplay();
    // to do
    console.log("updateNumberA to do: " + numberA);
}

function updateNumberB() {
    numberB = getDisplay();
    // to do
    console.log("updateNumberB to do: " + numberB);
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
    console.log("updateMainDisplay: " + getDisplay());
}

function updateSupportDisplay(text) {
    if (numberA != null)
        smallDisplay.textContent = numberA + " " + firstOperator;
    else
        clearSmallDisplay();
    console.log("updateSupportDisplay to do");
}

function backspace() {
    // to do manage operator
    let input = getDisplay();
    if (input.includes(" ")) {
        input = input.slice(0, input.indexOf(" "));
    } else {
        input = input.slice(0, -1);
        if (input.length == 0)
            input = "0";
    }
    bigDisplay.textContent = input;
    console.log("backspace to do");
}

function clearDisplays() {
    smallDisplay.innerHTML = "\&nbsp;";
    bigDisplay.textContent = "0";
    numberA = null;
    numberB = null;
    result = null;
    firstOperator = "";
    secondOperator = "";
}

function clearBigDisplay() {
    bigDisplay.textContent = "";
}

function clearSmallDisplay() {
    smallDisplay.textContent = "";
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