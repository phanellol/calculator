const container = document.querySelector("#container");
const inputContainer = document.createElement("div");
inputContainer.classList.add("inputContainer");
container.appendChild(inputContainer);
const input = document.createElement("div");
let inputContent;
input.classList.add("input");
inputContainer.appendChild(input);
const buttonsFieldContainer = document.createElement("div");
buttonsFieldContainer.classList.add("buttonsFieldContainer");
container.appendChild(buttonsFieldContainer);
const buttonNum1 = document.createElement("button");
buttonNum1.textContent = " 1";
buttonNum1.classList.add("button");
buttonsFieldContainer.appendChild(buttonNum1);
function sendOne() {
    if (inputContent === undefined) {
        inputContent = "1"
        return input.textContent = inputContent;
    } else if (inputContent === "") {
        inputContent = inputContent + "1";
        return input.textContent = inputFirstPart + inputContent;
    } else if (inputFirstPart !== undefined) {
        inputContent = inputContent + "1";
        return input.textContent = inputFirstPart + inputContent;
    } else {
        inputContent = inputContent + "1";
        return input.textContent = inputContent;
    }
}
buttonNum1.addEventListener("click", sendOne);
const buttonNum2 = document.createElement("button");
buttonNum2.textContent = " 2";
buttonNum2.classList.add("button");
buttonsFieldContainer.appendChild(buttonNum2);
function sendTwo() {
    if (inputContent === undefined) {
        inputContent = "2"
        return input.textContent = inputContent;
    } else if (inputContent === "") {
        inputContent = inputContent + "2";
        return input.textContent = inputFirstPart + inputContent;
    } else if (inputFirstPart !== undefined) {
        inputContent = inputContent + "2";
        return input.textContent = inputFirstPart + inputContent;
    } else {
        inputContent = inputContent + "2";
        return input.textContent = inputContent;
    }
}
buttonNum2.addEventListener("click", sendTwo);
const buttonNum3 = document.createElement("button");
buttonNum3.textContent = " 3";
buttonNum3.classList.add("button");
buttonsFieldContainer.appendChild(buttonNum3);
function sendThree() {
    if (inputContent === undefined) {
        inputContent = "3"
        return input.textContent = inputContent;
    } else if (inputContent === "") {
        inputContent = inputContent + "3";
        return input.textContent = inputFirstPart + inputContent;
    } else if (inputFirstPart !== undefined) {
        inputContent = inputContent + "3";
        return input.textContent = inputFirstPart + inputContent;
    } else {
        inputContent = inputContent + "3";
        return input.textContent = inputContent;
    }
}
buttonNum3.addEventListener("click", sendThree);
const buttonNum4 = document.createElement("button");
buttonNum4.textContent = " 4";
buttonNum4.classList.add("button");
buttonsFieldContainer.appendChild(buttonNum4);
function sendFour() {
    if (inputContent === undefined) {
        inputContent = "4"
        return input.textContent = inputContent;
    } else if (inputContent === "") {
        inputContent = inputContent + "4";
        return input.textContent = inputFirstPart + inputContent;
    } else if (inputFirstPart !== undefined) {
        inputContent = inputContent + "4";
        return input.textContent = inputFirstPart + inputContent;
    } else {
        inputContent = inputContent + "4";
        return input.textContent = inputContent;
    }
}
buttonNum4.addEventListener("click", sendFour);
const buttonNum5 = document.createElement("button");
buttonNum5.textContent = " 5";
buttonNum5.classList.add("button");
buttonsFieldContainer.appendChild(buttonNum5);
function sendFive() {
    if (inputContent === undefined) {
        inputContent = "5"
        return input.textContent = inputContent;
    } else if (inputContent === "") {
        inputContent = inputContent + "5";
        return input.textContent = inputFirstPart + inputContent;
    } else if (inputFirstPart !== undefined) {
        inputContent = inputContent + "5";
        return input.textContent = inputFirstPart + inputContent;
    } else {
        inputContent = inputContent + "5";
        return input.textContent = inputContent;
    }
}
buttonNum5.addEventListener("click", sendFive);
const buttonNum6 = document.createElement("button");
buttonNum6.textContent = " 6";
buttonNum6.classList.add("button");
buttonsFieldContainer.appendChild(buttonNum6);
function sendSix() {
    if (inputContent === undefined) {
        inputContent = "6"
        return input.textContent = inputContent;
    } else if (inputContent === "") {
        inputContent = inputContent + "6";
        return input.textContent = inputFirstPart + inputContent;
    } else if (inputFirstPart !== undefined) {
        inputContent = inputContent + "6";
        return input.textContent = inputFirstPart + inputContent;
    } else {
        inputContent = inputContent + "6";
        return input.textContent = inputContent;
    }
}
buttonNum6.addEventListener("click", sendSix);
const buttonNum7 = document.createElement("button");
buttonNum7.textContent = " 7";
buttonNum7.classList.add("button");
buttonsFieldContainer.appendChild(buttonNum7);
function sendSeven() {
    if (inputContent === undefined) {
        inputContent = "7"
        return input.textContent = inputContent;
    } else if (inputContent === "") {
        inputContent = inputContent + "7";
        return input.textContent = inputFirstPart + inputContent;
    } else if (inputFirstPart !== undefined) {
        inputContent = inputContent + "7";
        return input.textContent = inputFirstPart + inputContent;
    } else {
        inputContent = inputContent + "7";
        return input.textContent = inputContent;
    }
}
buttonNum7.addEventListener("click", sendSeven);
const buttonNum8 = document.createElement("button");
buttonNum8.textContent = " 8";
buttonNum8.classList.add("button");
buttonsFieldContainer.appendChild(buttonNum8);
function sendEight() {
    if (inputContent === undefined) {
        inputContent = "8"
        return input.textContent = inputContent;
    } else if (inputContent === "") {
        inputContent = inputContent + "8";
        return input.textContent = inputFirstPart + inputContent;
    } else if (inputFirstPart !== undefined) {
        inputContent = inputContent + "8";
        return input.textContent = inputFirstPart + inputContent;
    } else {
        inputContent = inputContent + "8";
        return input.textContent = inputContent;
    }
}
buttonNum8.addEventListener("click", sendEight);
const buttonNum9 = document.createElement("button");
buttonNum9.textContent = " 9";
buttonNum9.classList.add("button");
buttonsFieldContainer.appendChild(buttonNum9);
function sendNine() {
    if (inputContent === undefined) {
        inputContent = "9"
        return input.textContent = inputContent;
    } else if (inputContent === "") {
        inputContent = inputContent + "9";
        return input.textContent = inputFirstPart + inputContent;
    } else if (inputFirstPart !== undefined) {
        inputContent = inputContent + "9";
        return input.textContent = inputFirstPart + inputContent;
    } else {
        inputContent = inputContent + "9";
        return input.textContent = inputContent;
    }
}
buttonNum9.addEventListener("click", sendNine);
const buttonNum0 = document.createElement("button");
buttonNum0.textContent = " 0";
buttonNum0.classList.add("button");
buttonsFieldContainer.appendChild(buttonNum0);
function sendZero() {
    if (inputContent === undefined) {
        inputContent = "0"
        return input.textContent = inputContent;
    } else if (inputContent === "") {
        inputContent = inputContent + "0";
        return input.textContent = inputFirstPart + inputContent;
    } else if (inputFirstPart !== undefined) {
        inputContent = inputContent + "0";
        return input.textContent = inputFirstPart + inputContent;
    } else {
        inputContent = inputContent + "0";
        return input.textContent = inputContent;
    }
}
buttonNum0.addEventListener("click", sendZero);
const buttonEqual = document.createElement("button");
buttonEqual.textContent = "=";
buttonEqual.classList.add("button");
buttonsFieldContainer.appendChild(buttonEqual);
function sendEqual() {
    if (inputFirstPart !== undefined && inputContent !== undefined) {
        num2 = parseInt(inputContent);
        result = operate();
        return input.textContent = result;
    } else {
        alert("Wrong expression");
    }
}
buttonEqual.addEventListener("click", sendEqual);
const buttonClear = document.createElement("button");
buttonClear.textContent = "C";
buttonClear.classList.add("button");
buttonsFieldContainer.appendChild(buttonClear);
function clear() {
    inputContent = undefined;
    inputFirstPart = undefined;
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    result = undefined;
    return input.textContent = inputContent;
}
buttonClear.addEventListener("click", clear);
const buttonAdd = document.createElement("button");
buttonAdd.textContent = "+";
buttonAdd.classList.add("button");
buttonsFieldContainer.appendChild(buttonAdd);
function sendAdd() {
    if (inputContent === undefined) {
        alert("Wrong expression")
    } else {
        firstToInt();
        operator = "+";
        inputContent = inputContent + " " + "+" + " ";
        inputFirstPart = inputContent;
        input.textContent = inputFirstPart;
        inputContent = "";
        return input.textContent;
    }

}
buttonAdd.addEventListener("click", sendAdd);
const buttonSubtract = document.createElement("button");
buttonSubtract.textContent = "-";
buttonSubtract.classList.add("button");
buttonsFieldContainer.appendChild(buttonSubtract);
function sendSubtract() {
    if (inputContent === undefined) {
        alert("Wrong expression")
    } else {
        firstToInt();
        operator = "-";
        inputContent = inputContent + " " + "-" + " ";
        inputFirstPart = inputContent;
        input.textContent = inputFirstPart;
        inputContent = "";
        return input.textContent;
    }

}
buttonSubtract.addEventListener("click", sendSubtract);
const buttonMultiply = document.createElement("button");
buttonMultiply.textContent = "x";
buttonMultiply.classList.add("button");
buttonsFieldContainer.appendChild(buttonMultiply);
function sendMultiply() {
    if (inputContent === undefined) {
        alert("Wrong expression")
    } else {
        firstToInt();
        operator = "*";
        inputContent = inputContent + " " + "*" + " ";
        inputFirstPart = inputContent;
        input.textContent = inputFirstPart;
        inputContent = "";
        return input.textContent;
    }

}
buttonMultiply.addEventListener("click", sendMultiply);
const buttonDivide = document.createElement("button");
buttonDivide.textContent = "/";
buttonDivide.classList.add("button");
buttonsFieldContainer.appendChild(buttonDivide);
function sendDivide() {
    if (inputContent === undefined) {
        alert("Wrong expression")
    } else {
        firstToInt();
        operator = "/";
        inputContent = inputContent + " " + "/" + " ";
        inputFirstPart = inputContent;
        input.textContent = inputFirstPart;
        inputContent = "";
        return input.textContent;
    }

}
buttonDivide.addEventListener("click", sendDivide);

let inputFirstPart;
let num1: number;
let num2: number;
let operator;
let result;

function firstToInt() {
    return num1 = parseInt(inputContent);
}

function add(num1, num2) {
    let sum: number = num1 + num2;
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
    if (operator === "+") {
        result = add(num1, num2);
    } else if (operator === "-") {
        result = subtract(num1, num2);
    } else if (operator === "*") {
        result = multiply(num1, num2);
    } else {
        result = divide(num1, num2);
    };
    return result;
}