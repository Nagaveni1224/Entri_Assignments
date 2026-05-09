function getValues() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    return { num1, num2 };
}

function showResult(value) {
    document.getElementById("result").innerText = "Result: " + value;
}


function add() {
    let { num1, num2 } = getValues();
    showResult(num1 + num2);
}

function subtract() {
    let { num1, num2 } = getValues();
    showResult(num1 - num2);
}

function multiply() {
    let { num1, num2 } = getValues();
    showResult(num1 * num2);
}

function divide() {
    let { num1, num2 } = getValues();
    if (num2 === 0) {
        showResult("Cannot divide by zero");
    } else {
        showResult(num1 / num2);
    }
}

function square() {
    let num = parseFloat(document.getElementById("num1").value);
    showResult(num * num);
}

function cube() {
    let num = parseFloat(document.getElementById("num1").value);
    showResult(num * num * num);
}