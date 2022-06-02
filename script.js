let firstArg = '';
let secondArg = '';
let operator = '';

const digitButtons = document.querySelectorAll('.digit-button');
const operatorButtons = document.querySelectorAll('.operation-button');
const equalButton = document.querySelector('#equal');
const display = document.querySelector('.display');
const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () => {
    clear();
});

digitButtons.forEach((button) => 
button.addEventListener('click', () => {
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
    operator = button.textContent;
    console.log(operator);
}));

equalButton.addEventListener('click', () => {
    calculate(firstArg, secondArg, operator);
});

function displayNum(num) {
    display.textContent = num;
}

function clear() {
    firstArg = '';
    secondArg = '';
    operator = '';
    display.textContent = '';
}

function calculate(firstArg, secondArg, operator) {
    let a = parseInt(firstArg);
    let b = parseInt(secondArg);
    switch(operator){
        case '+':
            displayNum(a + b);
            break;
        case '-':
            displayNum(a - b);
            break;
        case '%':
            displayNum(a % b);
            break;
        case '*':
            displayNum(a * b);
            break;
    }
}