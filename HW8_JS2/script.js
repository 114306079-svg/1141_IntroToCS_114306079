function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return null; 
    }
    return a / b;
}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerText = "Result = Invalid input";
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            if (result === null) {
                resultDiv.innerText = "Result = Cannot divide by zero";
                return;
            }
            break;
        default:
            resultDiv.innerText = "Result = Invalid operation";
            return;
    }

    resultDiv.innerText = "Result = " + result.toFixed(2);
}
