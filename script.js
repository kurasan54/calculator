//VARIABLES
let firstN = "";
let secondN = "";
let operation = "";
let displayText = "XXX";
let pairOne = false;
let pairTwo = false;
let storedValue = "";
let iEqualed = false;
let operatorStored = "";

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
    let temp1 = Number(num1);
    let temp2 = Number(num2);

    if(operator == "*")
    {
       return multiply(temp1, temp2);
    }

    if(operator == "/")
    {
        return divide(temp1, temp2);
    }

    if(operator == "+")
    {
        return add(temp1, temp2);
    }

    if(operator == "-")
    {
        return subtract(temp1, temp2);
    }
}


//UPDATE DISPLAY
function updateDisplay(string){
    let temp = string.toString();
    //Updates number values 
    updateValues(temp);

    if (pairOne == false)
    {
        display.textContent = firstN;
    }
    if (pairOne == true)
    {
        display.textContent = secondN;
    }
    // display.textContent = string;
}

function updateOperand(string){
    operation = string;
    display.textContent = operation;

    //If you hit an operand before a number after selecting '=', then it won't reset the values.
    iEqualed = false;
    
    //if you hit an operand again, do calculation, store value as n1, display it, and reset n2
     if (operation != "" && pairTwo === true && secondN != "")
     {
        storedValue = operate(firstN, secondN, operatorStored);
        display.textContent = storedValue;
        firstN = storedValue;
        secondN = "";
        pairTwo = false;
        // operation = "";
     }

      //now we want to change it to 2nd value
    pairOne = true;
    operatorStored = string;
}

function displayCalculation(){
    storedValue = operate(firstN, secondN, operation);
    display.textContent = storedValue;

    firstN = storedValue;
    secondN = "";
    iEqualed = true;
    operator = "";
}


//UPDATE VALUES
function updateValues(argument){
    // if((argument === "0" || argument === 0) && (firstN !== "0" || firstN !== 0))
    //     return;

    //This make sure after hitting any number after '=', it removes any other value stored from the previous calculation
    if (iEqualed)
    {
        storedValue = "";
        firstN = "";
        secondN = "";
        iEqualed = false;
        pairOne = false;
    }


    if (pairOne === true)
    {
        // pairOne = false;
        pairTwo = true;
        secondN += argument;
    }
    else{
        firstN += argument;
}}

function clearCalculation(){
    storedValue = "";
    pairOne = false;
    pairTwo = false;
    firstN = '';
    secondN = '';
    operatorStored = "";
    display.textContent = "0";
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

multiplyButton.addEventListener("click", () => updateOperand("*"));

divideButton.addEventListener("click", () => updateOperand("/"));

addButton.addEventListener("click", () => updateOperand("+"));

subtractButton.addEventListener("click", () => updateOperand("-"));

equalButton.addEventListener("click", () => displayCalculation());

clearButton.addEventListener("click", () => clearCalculation());


