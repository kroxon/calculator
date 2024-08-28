
let firstNumber = 0;
let secondNumber = 0;
let operator = "+";

const bigDisplay = document.querySelector(".main");
const smallDisplay = document.querySelector(".support");

function operate() {
    switch (operator) {
        case '+':
            return secondNumber + firstNumber;
            break;
        case '-':
            return secondNumber - firstNumber;
            break;
        case '×':
            return secondNumber * firstNumber;
            break;
        case '÷':
            return secondNumber / firstNumber;
            break;
    }
}

function updateOperator(operator) {
    updateFirstNumber()
    smallDisplay.textContent = `${firstNumber} ${operator}`;
    // to do
    console.log("to do");
}

function updateFirstNumber() {
    // to do
    console.log("to do");
}

function getDisplay() {
    return bigDisplay.textContent;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        if (e.target.className === 'number') {
            console.log(e.target.textContent + " number");
            updateFirstNumber(e.target.textContent);
        }
        else if (e.target.className === 'operator') {
            console.log(e.target.textContent + " operator");
            updateOperator(e.target.textContent);
        }
        else
            console.log(e.target.textContent + " action");

    })
});

getDisplay();