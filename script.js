var num1 = 11;
var num2 = 11;
var operator = "-";
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
function subtract(num1, num2) {
    var difference = num1 - num2;
    return difference;
}
function multiply(num1, num2) {
    var product = num1 * num2;
    return product;
}
function divide(num1, num2) {
    var quotient = num1 / num2;
    return quotient;
}
function operate() {
    var result;
    if (operator === "+") {
        result = add(num1, num2);
    }
    else if (operator === "-") {
        result = subtract(num1, num2);
    }
    else if (operator === "*") {
        result = multiply(num1, num2);
    }
    else {
        result = divide(num1, num2);
    }
    console.log(result);
}
operate();
