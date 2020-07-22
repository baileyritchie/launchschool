// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
const readline = require('readline-sync');

console.log("Welcome to Calculator!");

console.log("What's the first number?");
let num1 = readline.question();

console.log("What's the second number");
let num2 = readline.question();

console.log("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
  let operation = readline.question();

let output;
if (operation === '1'){
  output = Number(num1) + Number(num2)
} else if (operation === '2'){
  output = Number(num1) - Number(num2)
}else if (operation === '3'){
  output = Number(num1) * Number(num2)
}else if (operation === '4'){
  output = Number(num1) / Number(num2)
} else {
  let operation = readline.question();
}

console.log(`The result is: ${output}`);
