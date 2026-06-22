//VARIABLES
let firstN = 0;
let secondN = 0;
let operation = "";

//BASIC MATH FUNCTIONS

function multiply(...numbers){
    return numbers.reduce((total, num) => total * num, 1);
}

function divide(...numbers){
    if (numbers.length === 0) return 0;
    return numbers.reduce((accumulator, currentValue) => accumulator / currentValue);
}

function subtract(...numbers){
    return numbers.reduce((accumulator, currentValue) => accumulator - currentValue);
}

function add(...numbers){
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}

//OPERATE
function operate(num1, operator, num2){
    if(operator == "multiply")
    {
        multiply(num1, num2);
    }

    if(operator == "divide")
    {
        divide(num1, num2);
    }

    if(operator == "add")
    {
        add(num1, num2);
    }

    if(operator == "subtract")
    {
        subtract(num1, num2);
    }
}