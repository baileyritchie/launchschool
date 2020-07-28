// easy 1 small problems
const readline = require('readline-sync');

const isOdd = (num) => {
  if (num && num % 2 !== 0) return true;
  else return false;
};

//tests
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

//odd numbers
for (let num = 1; num < 100; num += 2) {
  console.log(num);
}
//even numbers
for (let num = 1; num < 100; num += 1) {
  if (num % 2 === 1) {
    continue;
  }
  console.log(num);
}

//how big is this room?
function prompt(message) {
  console.log(`=> ${message}`);
}
prompt('Enter the length of the room in meters:');
let length = readline.question();

prompt('Enter the width of the room in meters:');
let width = readline.question();

findArea = (roomlen,roomwidth) => {
  return roomlen * roomwidth;
};
convertToFeet = (squareMeters) => {
  return squareMeters * 10.7639;
};
let finalArea = findArea(length,width);
let areaInFeet = convertToFeet(finalArea);

prompt(`The area of the room is: ${finalArea} square meters and ${areaInFeet} square feet.`);

// tip calculator
prompt('What is the bill in Dollars?');
let bill = readline.question();

prompt('What is the percentage you would like to tip?');
let tipPercent = readline.question();

getTipAmount = (bill,tip) => {
  return (tip / 100) * bill;
};
getTotalBill = (bill,totalTipAmount) => {
  return Number(bill)+Number(totalTipAmount);
};

prompt(`The tip is: ${getTipAmount(bill,tipPercent)}`);
prompt(`The total bill is is: ${getTotalBill(bill,getTipAmount(bill,tipPercent))}`);

// sum or product of consecutive integers
prompt('Please enter an integer that is greater than 0.');
let endingInt = readline.question();

prompt("Please enter 's' to compute the sum or 'p' to compute the product");
let responseType = readline.question();

if (responseType === 's') {
  let total = 0;
  for (let num = 1; num <= endingInt; num += 1) {
    total += num;
  }
  console.log(`The sum of the integers between 1 and ${endingInt} is ${total}.`);
} else if (responseType === 'p') {
  let total = 1;
  for (let num = 1; num <= endingInt; num += 1) {
    total *= num;
  }
  console.log(`The sum of the integers between 1 and ${endingInt} is ${total}.`);
} else {
  prompt("Sorry that's not a valid response.");
}

function shortLongShort (firstStr,secondStr) {
  if (firstStr.length > secondStr.length) {
    let copiedSecond = secondStr;
    return secondStr.concat(firstStr).concat(copiedSecond);
  } else if ( secondStr.length > firstStr.length) {
    let copiedFirst = firstStr;
    return firstStr.concat(secondStr).concat(copiedFirst);
  }
}
console.log(shortLongShort('abcde','fgh'));

// Leap Years Part One

function isLeapYear (year) {
  if (year >= 1752) {
    return console.log((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0));
  }
  return console.log((year % 4 === 0));
}

isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);

const reducer = (accum,item) => {
  return accum + item;
};
const isMult = (number) => {
  if (number % 3 === 0 || number % 5 === 0) {
    return true;
  }
  return false;
};
function multisum(num) {
  let array = Array.from(Array(num), (_,index) => index + 1);
  // filter so that the array only consists of 3 and 5 mults
  let finalArray = array.filter( number => isMult(number) );
  return finalArray.reduce(reducer,0);
}

console.log(multisum(10));

//ASCII String Value

function asciiValue (stringInput) {
  let str = stringInput.split("");
  let stringValue = 0;
  str.forEach((val) => {
    stringValue += val.charCodeAt(0);
  });
  return stringValue;
}

console.log(asciiValue('Four score'));