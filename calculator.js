export function calculate(firstArg, secondArg, operator) {
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