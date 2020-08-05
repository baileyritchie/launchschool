// question 1 - Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  // eslint considers this an error, semicolon placement
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

//question 2- what does the last line in the code output?
// should return { first: [ 1, 2 ] }
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

//question 3- given following sets of code, what will they output

function messWithVars(one, two, three) {
  one = two; // this does not change the value of the array
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// question 4- fix code to ensure it is a valid ip address

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
}