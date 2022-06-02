let firstArg = '';
let secondArg = '';
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
            displayNum(a + b);
            break;
        case '-':
            displayNum(a - b);
            break;
        case '%':
            let division = Math.floor(a / b * 1000) / 1000;
            displayNum(division);
            break;
        case '*':
            displayNum(a * b);
            break;
    }
}

//add functionality of delete button
//correct division function
//add rounding