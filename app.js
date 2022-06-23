
const operation = prompt("Pick the operation: +, /, *, -");
const number1 = parseFloat(prompt("Enter the first number: "));
const number2 = parseFloat(prompt("Enter the second number: "));

let result;

if (operation == "+") {
    result = number1 + number2;
} else if (operation == "/") {
    result = number1 / number2;
} else if (operation == "*") {
    result = number1 * number2;
} else if (operation == "-") {
    result = number1 - number2;
} else {
    result = "Error in operation choice";
}

alert(`${number1} ${operation} ${number2} equals ${result}`);
