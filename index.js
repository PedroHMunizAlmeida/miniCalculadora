let num1 = 16
let num2 = 24
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEL = document.getElementById("sum-el")

function add() {
    sumEL.textContent = num1 + num2
}

function subtract() {
    sumEL.textContent = num1 - num2
}

function divide() {
    sumEL.textContent = num1 / num2
}

function multiply() {
    sumEL.textContent = num1 * num2
}