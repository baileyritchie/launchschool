// question 1 - ascii art make the string prrint with more spacing
let flintString = 'The Flintstones Rock!';

for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + flintString);
}
// question 2 - swap the character case of all the letters

let munstersDescription = "The Munsters are creepy and spooky.";
// following method does not work, as strings are immutable better to make a copy
// make a copy and then return the new string

/* for (let char = 0; char < munstersDescription.length; char++) {
  let letter = munstersDescription[char];
  console.log(letter);
  if (letter === letter.toLowerCase()) {
    // if the character is lowercase
    console.log('lower');
    letter.toUpperCase();
  } else {
    // the character is uppercase
    letter.toLowerCase();
  }
}
console.log(munstersDescription); */

let newDescription = munstersDescription.split("").map((char) => {
  if (char === char.toUpperCase()) return char.toLowerCase();
  else return char.toUpperCase();
}).join("");

console.log(newDescription);

// question 3 - reformat code to exclude do while
function factorsOf(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      //to ensure that it is divisible with no remainder aka an integer
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factorsOf(6));
console.log(factorsOf(-9));

// question 4 - understanding difference between push vs concat

// push mutates the original object, concat makes a copy and returns it
// push is more useful for permanent changes
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

//question 5 - what will this output
//soln-.8999999 and false,floating points lack precision and yield weird numbers
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

//question 6- what will this output
// use Number.isNan(num) to test if num is a number
// The output is false. NaN -- not a number -- is a special numeric value
// js doesn't let you use == or === to determine if a val is a number
let nanArray = [NaN];
console.log(nanArray[0] === NaN);

// question 7 - what does this output
// ouputs 34 because only the original answer is passed to console.log
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}
let newAnswer = messWithIt(answer);
console.log(answer - 8);

//question 8 - does this function mutate the original object?
// Soln - yes, because in javascript objects are passed by reference
// you have to reassign the object before mutating for it to not change

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
messWithDemographics(munsters);

// question 9- figure out what the console logs
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
// inner most evaluates to rps("paper","rock") -> ("paper","rock") -> paper

// question 10 - what does bar(foo()) return?
// soln returns "no"
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

