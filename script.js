let firstArg = '';
let secondArg = '';
let resetScreen = false;
let operator = '';

//Selection of elements from DOM

const digitButtons = document.querySelectorAll('.digit-button');
const operatorButtons = document.querySelectorAll('.operation-button');
const equalButton = document.querySelector('#equal');
const display = document.querySelector('.display');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const pointButton = document.querySelector('#point');

//Buttons event listeners

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
    if (firstArg != '' && secondArg != '') {
        displayNum(calculate(firstArg, secondArg, operator));
        resetScreen = true;
    }
});

pointButton.addEventListener('click', () => {
    if (operator == '') {
        if (!firstArg.search('.')) {
            firstArg += '.';
            displayNum(firstArg);
        }
    } else if (!secondArg.search('.')) { 
        secondArg += '.';
        displayNum(secondArg);
    } 
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
    let a = parseFloat(firstArg);
    let b = parseFloat(secondArg);
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            if (firstArg != 0 && secondArg != 0 ) {
                return Math.floor(a / b * 1000) / 1000;
            } else return "Error";
        case '*':
            return a * b;
    }
}

//Keyboard support

document.addEventListener('keydown', (event) => {
    let btn = event.key;
    if (btn >= 0 || btn <= 9) {
        if (resetScreen) clear();
        if (operator == '') {
            firstArg += btn;
            displayNum(firstArg);
        }
        else {
            secondArg += btn;
            displayNum(secondArg);
        }
    }
    if (btn == 'Backspace') deleteDigit();
    if (btn == '/' || btn == '-' || btn == '+' || btn == '*') {
        if (operator == '') {
            operator = btn;
        } else {
            firstArg = calculate(firstArg, secondArg, operator);
            operator = btn;
            secondArg = '';
            displayNum(firstArg);
        }
    }
    if (btn == '=') {
        if (firstArg != '' && secondArg != '') {
            displayNum(calculate(firstArg, secondArg, operator));
            resetScreen = true;
        }
    }
    if (btn == 'Delete') clear();
    if (btn == '.') {
        if (operator == '') {
            if (!firstArg.search('.')) {
                firstArg += '.';
                displayNum(firstArg);
            }
        } else if (!secondArg.search('.')) { 
            secondArg += '.';
            displayNum(secondArg);
        } 
    }
})