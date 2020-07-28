// question 1
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replace('important','urgent'));

//queestion 2 - reverse an array
let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

// question 3 - check if number in array

let randArr = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(randArr.includes(number1));
console.log(randArr.includes(number2));

// question 4 - place a string in front of another string
let famousWords = "seven years ago...";
let result = "Four score and " + famousWords;
let result2 = "Four score and ".concat(famousWords);
console.log(result,result2);

//question 5 - given an arr of numbers remove the val at position 2
let anotherArr = [1,2,3,4,5];
anotherArr.splice(2,1);
console.log(anotherArr);

// question 6- un-nest a given array
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
flintstones = [].concat(...flintstones);

console.log(flintstones);

// question 7- create an array from an object that contains two entries
let flintstones2 = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
Object.entries(flintstones2).filter(pair => pair[0] === "Barney").shift();
console.log(flintstones2);

// question 8 - check the type to see if a variable is an array or object
let numbersVar = []; // true
let tableVar = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbersVar));
console.log(Array.isArray(tableVar));

// question 9 - add padding to a title so it matches a table
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);

// question 10- count the # of lowercase ts

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(char => char === 't').length);

