function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
function subtract(num1, num2) {
    const subtract = num1 - num2;
    return subtract;
}
function multiply(num1, num2) {
    const multiply = num1 * num2;
    return multiply;
}
function divide(num1, num2) {
    const divide = num1 / num2;
    return divide;
}

function calculator(x, y, operation) {
    if (operation === add) {
        const result = add(x, y);
        return result;
    }
    else if (operation === subtract) {
        const result = subtract(x, y);
        return result;
    }
    else if (operation === multiply) {
        const result = multiply(x, y);
        return result;
    }
    else if (operation === divide) {
        const result = divide(x, y);
        return result;
    }
    else {
        return "only 'add', 'subtract', 'multiply', 'divide'operation is allowed";
    }

}
const result = calculator(10, 25, add);
console.log("Odd:", result);

const result2 = calculator(10, 25, subtract);
console.log("Subtract: ", result2);

const result3 = calculator(10, 25, multiply);
console.log("Multiply: ", result3);

const result4 = calculator(10, 25, divide);
console.log("Subtract: ", result4);

const result5 = calculator(10, 25,);
console.log("only 'add', 'subtract', 'multiply', 'divide'operation is allowed", result5);