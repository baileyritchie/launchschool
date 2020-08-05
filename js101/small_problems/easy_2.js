
let readlineSync = require("readline-sync");

// question 1 - welcome stranger
function greetings(name,status) {
  let intro = `Hello ${name.join(' ')}!`;
  let description = ` Nice to have a ${status.title} ${status.occupation} on board.`;
  return intro + description;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

// question 2- greeting a user

console.log('What is your name?');
let result = readlineSync.question();
console.log(result);
if (!result.split("").includes('!')) {
  console.log(`Hello ${result}.`);
} else console.log(`HELLO ${result.toUpperCase()} WHY ARE WE SCREAMING?`);

// question 3- create a func that multiplies 2 numbers and returns the result

let multiply = (firstNum,secondNum) => ( firstNum * secondNum);

console.log(multiply(2,3));

// question 4- create a func that computes the square of its arguments
const square = (num) => (multiply(num,num));

console.log(square(2));

// question 5- prompt user for two positive ints, then perform set operations
console.log('Enter the first value:');
let num1 = readlineSync.question();

console.log('Enter the second value:');
let num2 = readlineSync.question();

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(
  `${num1} ** ${num2} = ${Math.pow(num1, num2)}`
);

// question 6 - Write a function that returns the next
//to last word in the String passed to it as an argument.

function nextToLast(string) {
  let array = string.split(' ');
  return array[array.length - 2];
}

console.log(nextToLast('is great!'));

// question 7
// create an exclusive or function

function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

//question 8 - create a function that returns and array of every other elm
function oddities(array) {
  let oddElements = [];
  for (let idx = 0; idx < array.length; idx += 2) {
    oddElements.push(array[idx]);
  }
  return oddElements;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

//question 9 - convert a string to an integer;
// soln - use a constant object to map the string to it's number equivalent
// for each number, calculate the numeric value to make the string
function stringToInteger(string) {
  const DIGITS = {
    0:0,
    1:1,
    2:2,
    3:3,
    4:4,
    5:5,
    6:6,
    7:7,
    8:8,
    9:9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

console.log(stringToInteger("4321") === 4321);

function stringToSignedInteger(string) {
  if (string.startsWith('-')) {
    let newString = string.slice(1);
    return stringToInteger(newString) * -1;
  } else if (string.startsWith('+') ) {
    let newString = string.slice(1);
    return stringToInteger(newString);
  } else return stringToInteger(string);
}
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

function integerToString(number) {
  let result = '';
  const DIGITS = ['0','1','2','3','4','5','6','7','8','9'];

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);
  return result;
}
console.log(integerToString(4321));      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"

function signedIntegerToString (number) {
  if (Math.sign(number) > 0) {
    //if positive number
    return `+${integerToString(number)}`;
  } else if (Math.sign(number) === 0) {
    //just zero
    return integerToString(number);
  } else {
    return `-${integerToString(-number)}`;
  }
}


console.log(signedIntegerToString(22));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));
