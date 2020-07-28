// question 1

let numbers = [1, 2, 3];
numbers[6] = 5;

// above code does not run an error, but treats 3-5 as empty

// question2 - does it end with a question mark
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(str1.endsWith('!'));

// question3 - does this object have a kwy for 'Spot'
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

function checkForSpot (object) {
  return object.hasOwnProperty('Spot');
}
console.log(checkForSpot(ages));

// question 4- take string, lowercase all letters and capitalize the first
let munstersDescription = "the Munsters are CREEPY and Spooky.";

function capitalizeSentence(sentence) {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
}

console.log(capitalizeSentence(munstersDescription));

// question 6- adding additonal entries to our agess object
let additionalAges = { Marilyn: 22, Spot: 237 };

// adding to old object
console.log(Object.assign(ages,additionalAges));

// create a new object
console.log(Object.assign({},ages,additionalAges));

// question 7- check whether a specific string appears in a longer string

let string1 = "Few things in life are as important as house training your pet dinosaur.";
let string2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(string1.includes("Dino"));
console.log(string2.includes("Dino"));

// question 8- add the word dino to this array

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
//flintstones.push("Dino");
console.log(flintstones);

// in order to use concat method, just reassign
// flintstones = flintstones.concat("Dino");

// question 9 - how do we add more than 1 item to an array
// we can add multiple values to a push
let newDinos = ["Dino","Hoppy"];
flintstones = flintstones.concat(newDinos);
console.log(flintstones);

// question 10 - remove everything before house
let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.slice(0,39));

