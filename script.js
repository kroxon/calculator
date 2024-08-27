function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber;
let secondNumber;
let operator;

function operate(op, a, b) {
    switch (op) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
    }
}

const numbers = document.querySelectorAll(".number");
numbers.forEach(button => {
    button.addEventListener("click", function (e) {
        console.log(e.target.textContent);
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach(button => {
    button.addEventListener("click", function (e) {
        console.log(e.target.textContent);
    })
});