let readlineSync = require("readline-sync");
const { burlywood } = require("color-name");
//question 1 - write a func to find consecutive letters and turn them into singles

function crunch (sentence) {
  let index = 0;
  let result = '';
  while (index < sentence.length) {
    if (sentence[index] !== sentence[index + 1]) {
      result += sentence[index];
    }
    index += 1;
  }
  return result;
}

console.log(crunch('ggggggggggggggg'));
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));

//question 2- create a banner in the console.log for every sentence

function logInBox (sentence, maxWidth) {
  // should be two paddes spaces to the left and right
  // sentence should go on the third line down
  let len = sentence.length;
  let horizon = '+-' + '-'.repeat(len) + '-+';
  let middle = '| ' + ' '.repeat(len) + ' |';
  let text = '| ' + sentence.trim() + ' |';
  let order = [horizon, middle, text, middle,horizon];
  order.forEach((string) => {
    console.log(string);
  });
}
logInBox('To boldly go where no one has gone before.');

// question 3 -  write a function that takes an integer
// and returns a string of alternate 1s and 0s

function stringy (number) {
  if (number % 2 === 0) {
    // if the number is even
    return '10'.repeat(number / 2);
  } else if (number % 2 === 1) {
    // if number is odd
    return '10'.repeat((number - 1) / 2) + '1';
  } else return '0';
  //case it is zero
}

console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(0));


// question 4 - write a function that calcs and returns the
// index of the fib number that hass the number of digits specified by the arg
// aproach with pseudocode

/* fibonacci - a sequence of numbers 1,1,2,3,5,8,13,21....
  the first two numbers of fibonacci are 1,1, with the first index being 1
  each proceeding number is the sum of the last two numbers

  algorithm:
  write a loop that terminates when the number of digits in the fibb sequence
  is equal to the number of digits given to the function
  start with thee first two numbers, 1 and 1,
  by keeping one number as the earlier and the second as the later
  in the loop,combine the numbers and reassign them to fibonaccis, and repeat
  each time, increment an index that starts from 2
  return the index when the loop is terminated
*/
function findFibonacciIndexByLength(digits) {
  // while the number of digits < fibNumber.length
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonnaci;
  do {
    fibonnaci = first + second;
    index += 1;
    first = second;
    second = fibonnaci;
  } while (String(fibonnaci).length < digits);
  return index;

}

console.log(findFibonacciIndexByLength(2));


// question 5- write a function that takes an integer n
// and logs a right triangle with n side lengths

/* P - a right triangle has 1 90 degree angle
  the area of a right triangle is 1/2 n^2

  Algorithm:
  keep track of variable for blank spaces and a variable for
  the triangle's stars
  write a while loop that terminates when it reaches the value
  of the integer,
  as the loop proceeds, decrement the blank spaces whilee you
  increment the starred spaces
  console.log each line to get the desired line by line image
*/

function triangle(number) {
  let stars =  1;
  let blanks = number - 1;
  let rowCount = 0;

  while (rowCount < number) {
    console.log(" ".repeat(blanks) + "*".repeat(stars));
    blanks -= 1;
    stars += 1;
    rowCount += 1;
  }
}

triangle(9);

// question 6- create a madlibs program that asks for certain words
// and fills them in for entertainment purposes
console.log('Enter a noun:');
let noun = readlineSync.question();
console.log('Enter a verb:');
let verb = readlineSync.question();
console.log('Enter an adjective:');
let adjective = readlineSync.question();
console.log('Enter an adverb:');
let adverb = readlineSync.question();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);

// question 7 - write a function that multiplied non double numbers by two
// else return the doubled number
function twice (number) {
  let string = String(number);
  let half = Math.floor((string.length) / 2);
  let firstHalf = string.slice(0,half);
  let secondHalf = string.slice(half);
  if (firstHalf === secondHalf) {
    // is a double
    return number;
  } else return number * 2;
}
console.log(twice(37));
console.log(twice(44));

// question 8 - create a function that takes the average of three grades and then
// assigns a letter grade

function getGrade(grade1,grade2,grade3) {
  let average = (grade1 + grade2 + grade3) / 3;
  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}
console.log(getGrade(95, 90, 93));

// question 9 - given a stirng with some words and non-alphabetic chars,
// replace those characters with spaces

// question 10 - write a function that takes a year as input and returns the century

function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

console.log(century(2000));