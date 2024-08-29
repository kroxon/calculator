
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
    result = formatResult(result);
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
        } else if (numberA == null && input !== "0") {
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
        } else if (numberA != null) {
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

}


function updateNumberA() {
    numberA = getDisplay();
    if (numberA.endsWith("."))
        numberA = numberA.slice(0, -1);
}

function updateNumberB() {
    numberB = getDisplay();
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
}

function updateSupportDisplay(text) {
    if (numberA != null)
        smallDisplay.textContent = numberA + " " + firstOperator;
    else
        clearSmallDisplay();
}

function backspace() {
    let input = getDisplay();

    if (input.includes("e"))
        input = input.slice(0, input.indexOf("e"));
    else
        input = input.slice(0, -1);
    if (input.length == 0)
        input = "0";

    bigDisplay.textContent = input;
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

function formatResult(number) {
    let resultString = number.toString();

    if (resultString.length > 12) {
        if (Math.floor(number).toString().length >= 12) {
            return number.toExponential(5);
        } else {
            return Number(number.toPrecision(12)).toString();
        }
    }
    return resultString;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        if (e.target.className === 'number') {
            updateMainDisplay(e.target.textContent);
        }
        else if (e.target.className === 'operator') {
            updateOperator(e.target.textContent);
        }
        else {
            if (e.target.textContent === "AC") {
                clearDisplays();
            }
            if (e.target.textContent === "backspace") {
                backspace();
            }
        }
    })
});