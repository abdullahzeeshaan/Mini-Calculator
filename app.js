let num1 = +prompt("Please enter the first number");
let num2 = +prompt("Please enter the second number");
let operator = prompt("Please enter an operator: +, -, *, /, %");

let result;

if (operator === "+") {
    result = num1 + "+" + num2 + "=" + (num1 + num2);
} else if (operator === "-") {
    result = num1 + "-" + num2 + "=" + (num1 - num2);
} else if (operator === "*") {
    result = num1 + "*" + num2 + "=" + (num1 * num2);
} else if (operator === "/") {

    if (num2 !== 0) {
        result = num1 + "/" + num2 + "=" + (num1 / num2);
    } else {
        result = "Error: Cannot divide by zero";
    }

} else if (operator === "%") {
    result = num1 + "%" + num2 + "=" + (num1 % num2);
} else {
    console.log("Invalid Operatr")
}

console.log("Result:" + result);
