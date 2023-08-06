let display = document.getElementById('display');
let digits = Array.from(document.querySelectorAll('.digit'));
let operators = Array.from(document.querySelectorAll('.operator'));
let equals = document.querySelector('.equals');

let num1 = ''
let operatorChoice = null
let num2 = ''
let displayValue = ''

function add(a, b) {
   return(Number(a) + Number(b));
}

function subtract(a, b) {
    return(Number(a) - Number(b));
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

getOperator();

digits.forEach((digit) => {
    digit.addEventListener('click' ,(() => {
        if (operatorChoice === null) {
        num1 += digit.id;
        display.textContent += digit.id;
        console.log('num1 ',num1)
        }
        else {
            num2 += digit.id;
            display.textContent += digit.id;
            console.log('num2 ',num2)
            num1 = operate(num1, operatorChoice ,num2)
            console.log(num1, 'ehhe')
        }
    }))
})


function getOperator() {
    operators.forEach((operator) => {
        operator.addEventListener('click' ,(() => {
            if (operatorChoice === null || num2 === '') {
                operatorChoice = operator.id;
                display.textContent += operator.id;
                console.log(operatorChoice);
            }
            else {
                operatorChoice = operator.id;
                display.textContent = operate(num1, operatorChoice, num2);
                console.log(operate(num1, operatorChoice, num2));
                num1 = operate(num1, operatorChoice, num2);
                display.textContent += operator.id;
                num2 = '';
                console.log(operatorChoice);
            }
            return operatorChoice;
        }))
    })
}



equals.addEventListener('click', (() => {
    console.log(operate(num1, operatorChoice, num2));
    display.textContent = operate(num1, operatorChoice, num2)
    num1 = operate(num1, operatorChoice, num2);
    num2 = '';
}))



 
 
 
 