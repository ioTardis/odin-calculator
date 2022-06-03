let firstArg = '';
let secondArg = '';
let resetScreen = false;
let operator = '';

const digitButtons = document.querySelectorAll('.digit-button');
const operatorButtons = document.querySelectorAll('.operation-button');
const equalButton = document.querySelector('#equal');
const display = document.querySelector('.display');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');

clearButton.addEventListener('click', () => {
    clear();
});

deleteButton.addEventListener('click', () => {
    deleteDigit();
});

digitButtons.forEach((button) => 
button.addEventListener('click', () => {
    if (resetScreen) clear();
    if (operator == '') {
        firstArg += button.textContent;
        displayNum(firstArg);
    }
    else {
        secondArg += button.textContent;
        displayNum(secondArg);
    }
}));

operatorButtons.forEach((button) => 
button.addEventListener('click', () => {
    if (operator == '') {
        operator = button.textContent;
    } else {
        firstArg = calculate(firstArg, secondArg, operator);
        operator = button.textContent;
        secondArg = '';
        displayNum(firstArg);
    }
}));

equalButton.addEventListener('click', () => {
    displayNum(calculate(firstArg, secondArg, operator));
    resetScreen = true;
});

function displayNum(num) {
    display.textContent = num;
}

function clear() {
    firstArg = '';
    secondArg = '';
    operator = '';
    display.textContent = '';
    resetScreen = false;
}

function deleteDigit() {
    if (operator == '') {
        firstArg = firstArg.slice(0, -1);
        displayNum(firstArg);
    } else {
        secondArg = secondArg.slice(0, -1);
        displayNum(secondArg);
    }
}

function calculate(firstArg, secondArg, operator) {
    let a = parseInt(firstArg);
    let b = parseInt(secondArg);
    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '%':
            return Math.floor(a / b * 1000) / 1000;
        case '*':
            return a * b;
    }
}