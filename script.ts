let num1 = 11;
let num2 = 11;
let operator = "-";

function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    let difference = num1 - num2;
    return difference;
}

function multiply(num1, num2) {
    let product = num1 * num2;
    return product;
}

function divide(num1, num2) {
    let quotient = num1 / num2;
    return quotient;
}

function operate() {
    let result: number;
    if (operator === "+") {
        result = add(num1, num2);
    } else if (operator === "-") {
        result = subtract(num1, num2);
    } else if (operator === "*") {
        result = multiply(num1, num2);
    } else {
        result = divide(num1, num2);
    }
    console.log(result);

}

operate();


