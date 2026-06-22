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

console.log(add(8, 2, 5));