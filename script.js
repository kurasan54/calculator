//VARIABLES
let firstN = "";
let secondN = "";
let operation = "";
let displayText = "0";
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

//UPDATE OPERAND
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
//EQUAL OPERAND
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

//CLEAR CALCULATIONS
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
const display = document.createElement('div');
const grid = document.createElement('div');

//Dispay CSS
display.style.display = "flex";
display.style.flexWrap = "wrap";
display.style.width = "400px";
display.style.height = "90px";
display.style.alignContent = "center";
display.style.justifyContent = "right";
display.style.paddingRight = "20px";
display.style.fontSize = "50px";
display.style.border = "2px solid black";
display.style.boxSizing = "border-box";
display.textContent = displayText;
document.body.appendChild(display);

//Body CSS
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.backgroundColor = "#f0f0f0";
document.body.style.gap = "20px";

//Grid
const size = 4;
grid.style.display = "flex";
grid.style.flexWrap = "wrap";
grid.style.width = "400px";
grid.style.height = "400px";
grid.style.border = "1px solid black";

//For loop to create 4x4 grid
for (let i = 0; i < size * size; i++) {
    const button = document.createElement("button");

    button.textContent = assignText(i);

    button.style.flexBasis = `${100 / size}%`;
    button.style.height = `${100 / size}%`;
    button.style.boxSizing = "border-box";
    button.style.fontSize = "25px";

    button.addEventListener("click", () => overHaul(i));

    grid.appendChild(button);
}

//Assigns the buttons their respective text
function assignText(number)
{
    switch (number)
    {
        case 0:
            return 7;
        case 1:
            return 8;
        case 2:
            return 9;
        case 3:
            return "+";
        case 4:
            return 4;
        case 5:
            return 5;
        case 6:
            return 6;
        case 7:
            return "-";
        case 8:
            return 1;
        case 9:
            return 2;
        case 10:
            return 3;
        case 11:
            return "*";
        case 12:
            return "C";
        case 13:
            return 0;
        case 14:
            return "=";
        case 15:
            return '/';
    } 
}

//Assigns the buttons their respective functions
function overHaul(number)
{
    switch (number)
    {
        case 0:
            updateDisplay(7);
            break;
        case 1:
            updateDisplay(8);
            break;
        case 2:
            updateDisplay(9);
            break;
        case 3:
            updateOperand('+');
            break;
        case 4:
            updateDisplay(4);
            break;
        case 5:
            updateDisplay(5);
            break;
        case 6:
            updateDisplay(6);
            break;
        case 7:
            updateOperand('-');
            break;
        case 8:
            updateDisplay(1);
            break;
        case 9:
            updateDisplay(2);
            break;
        case 10:
            updateDisplay(3);
            break;
        case 11:
            updateOperand('*');
            break;
        case 12:
            clearCalculation();
            break;
        case 13:
            updateDisplay(0);
            break;
        case 14:
            displayCalculation();
            break;
        case 15:
            updateOperand('/');
            break;
    } 
}

document.body.appendChild(grid);


