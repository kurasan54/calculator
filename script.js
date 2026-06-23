//VARIABLES
let firstN = 0;
let secondN = 0;
let operation = "";
let displayText = "XXX";

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
function operate(num1, num2, operator){
    if(operator == "*")
    {
       return multiply(num1, num2);
    }

    if(operator == "/")
    {
        return divide(num1, num2);
    }

    if(operator == "+")
    {
        return add(num1, num2);
    }

    if(operator == "-")
    {
        return subtract(num1, num2);
    }
}


//UPDATE DISPLAY
function updateDisplay(string){
    display.textContent = string;

    //Updates number values 
    if (Number.isInteger(string))
    {
        updateValues(string);
    }

    //Updates operand values
    updateOperand(string);
}


//UPDATE VALUES
function updateValues(argument){
    if (pairOne === true)
    {
        pairOne = false;
        secondN = argument;
    }
    else{
        pairOne = true;
        firstN = argument;
}}

function clearCalculation(){
    pairOne = false;
    pairTwo = false;
    firstN = 0;
    secondN = 0;
    display.textContent = "";
}



//CSS
const container = document.querySelector(".document");

const display = document.createElement('div');
display.textContent = displayText;
document.body.appendChild(display);

const zeroButton = document.createElement('button');
const oneButton = document.createElement('button');
const twoButton = document.createElement('button');
const threeButton = document.createElement('button');
const fourButton = document.createElement('button');
const fiveButton = document.createElement('button');
const sixButton = document.createElement('button');
const sevenButton = document.createElement('button');
const eightButton = document.createElement('button');
const nineButton = document.createElement('button');
const multiplyButton = document.createElement('button');
const divideButton = document.createElement('button');
const addButton = document.createElement('button');
const subtractButton = document.createElement('button');
const equalButton = document.createElement('button');
const clearButton = document.createElement('button');

zeroButton.textContent = "0";
oneButton.textContent = "1";
twoButton.textContent = "2";
threeButton.textContent = "3";
fourButton.textContent = "4";
fiveButton.textContent = "5";
sixButton.textContent = "6";
sevenButton.textContent = "7";
eightButton.textContent = "8";
nineButton.textContent = "9";
multiplyButton.textContent = "*";
divideButton.textContent = "/";
addButton.textContent = "+";
subtractButton.textContent = "-";
equalButton.textContent = "=";
clearButton.textContent = "C";

document.body.appendChild(zeroButton);
document.body.appendChild(oneButton);
document.body.appendChild(twoButton);
document.body.appendChild(threeButton);

document.body.appendChild(fourButton);
document.body.appendChild(fiveButton);
document.body.appendChild(sixButton);
document.body.appendChild(sevenButton);

document.body.appendChild(eightButton);
document.body.appendChild(nineButton);
document.body.appendChild(multiplyButton);
document.body.appendChild(divideButton);

document.body.appendChild(addButton);
document.body.appendChild(subtractButton);
document.body.appendChild(equalButton);
document.body.appendChild(clearButton);

zeroButton.addEventListener("click", () => updateDisplay(0));

oneButton.addEventListener("click", () => updateDisplay(1));

twoButton.addEventListener("click", () => updateDisplay(2));

threeButton.addEventListener("click", () => updateDisplay(3));

fourButton.addEventListener("click", () => updateDisplay(4));

fiveButton.addEventListener("click", () => updateDisplay(5));

sixButton.addEventListener("click", () => updateDisplay(6));

sevenButton.addEventListener("click", () => updateDisplay(7));

eightButton.addEventListener("click", () => updateDisplay(8));

nineButton.addEventListener("click", () => updateDisplay(9));

multiplyButton.addEventListener("click", () => updateDisplay("*"));

divideButton.addEventListener("click", () => updateDisplay("/"));

addButton.addEventListener("click", () => updateDisplay("+"));

subtractButton.addEventListener("click", () => updateDisplay("-"));

equalButton.addEventListener("click", () => updateDisplay("="));

clearButton.addEventListener("click", () => clearCalculation());


