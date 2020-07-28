//question 1 - how to remove these elements from an array

let numbers = [1, 2, 3, 4];

//(numbers.splice(0,numbers.length));
//(numbers.length = 0 );
while (numbers.length > 0) {
  numbers.pop();
}
console.log(numbers);

//question 2 - what does adding two arrs look like
console.log([1, 2, 3] + [4, 5]);
// 1,2,34,5 coerces to a string before adding

//question 3 - what is the expected result from console
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
//should log hello there,strings are immutable and str2 is given a copy

//question 4 - what does this output

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// outputs [{ first: 42 }, { second: "value2" }, 3, 4, 5];
// changes the value of first, because slice is only a SHALLOW copy

// question 5 - eliminate the additional return and boolean

function isColorValid(color) {
  return (color === "blue" || color === "green");
}
// oorrr

const isColorCorrect = (color) => ["blue","green"].includes(color);



