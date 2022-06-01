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
    if (operator == '') firstArg = parseInt(button.textContent);
    else secondArg = parseInt(button.textContent);
}));

operatorButtons.forEach((button) => 
button.addEventListener('click', () => {
    operator = button.textContent;
    console.log(operator);
}));

equalButton.addEventListener('click', () => {
    calculate(firstArg, secondArg, operator);
});

function clear() {
    firstArg = '';
    secondArg = '';
    operator = '';
    display.textContent = '';
}

function calculate(firstArg, secondArg, operator) {
    switch(operator){
        case '+':
            display.textContent = firstArg + secondArg;
            break;
        case '-':
            display.textContent = firstArg - secondArg;
            break;
        case '%':
            display.textContent = firstArg % secondArg;
            break;
        case '*':
            display.textContent = firstArg * secondArg;
            break;
    }
}