let display = document.getElementById('display');
let digits = Array.from(document.querySelectorAll('.digit'));
let operators = Array.from(document.querySelectorAll('.operator'));

let num1 = 0
let operatorChoice = null
let num2 = 0
let displayValue = ''

function add(a, b) {
   return(a + b);
}

function subtract(a, b) {
    return(a - b);
}

function multiply (a, b) {
    return(a * b);
}

function divide (a, b) {
    return(a / b);
}

function operate(num1, operator, num2) {
    if (operator === '+') {
        return add(num1,num2)
    }
    else if (operator === '-') {
        return subtract(num1,num2)
    }
    else if (operator === '*') {
        return multiply(num1,num2)
    }
    else if (operator === '/') {
        return divide(num1,num2)
    }
}

digits.forEach((digit) => {
    digit.addEventListener('click', updateDisplay)
})

operators.forEach((operator) => {
    operator.addEventListener('click', updateDisplay)
})

function updateDisplay() {
    displayValue += this.id;
    display.textContent += this.id;
}

 
 
 
 
 