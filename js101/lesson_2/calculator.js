// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt("Welcome to Calculator!");
// TODO call beginCalculating function and add a feature
// that allows users to KEEP calculating
// TODO Transfer messages(prompt text) to config file
// TODO make process to send config file messages to translation service

prompt("What's the first number?");
let num1 = readline.question();

while (invalidNumber(num1)) {
  prompt('Hmmm that is not a valid number...');
  num1 = readline.question();
}

prompt("What's the second number");
let num2 = readline.question();

while (invalidNumber(num2)) {
  prompt('Hmmm that is not a valid number...');
  num2 = readline.question();
}

prompt("What operation would you like to perform?");
prompt("1) Add 2) Subtract 3) Multiply 4) Divide");

let operation = readline.question();
while (!['1','2','3','4'].includes(operation)) {
  prompt("Please select from options 1,2,3 or 4");
  operation = readline.question();
}

/* let output;
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
} */

let output;


switch (operation) {
  case '1':
    output = Number(num1) + Number(num2);
    break;
  case '2':
    output = Number(num1) - Number(num2);
    break;
  case '3':
    output = Number(num1) * Number(num2);
    break;
  case '4':
    output = Number(num1) / Number(num2);
    break;
}

prompt(`The result is: ${output}`);
