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

