// question 1 - What is the return value of the filter method call below? Why?
// soln - shows [1,2,3] because all values evaluate to truthy
[1, 2, 3].filter(num => 'hi');


// question 2 - what is the return of map in the code below
// soln returns [undefined,undefined,undefined]
// there is no return statement therefore callback returns undef each time
[1, 2, 3].map(num => {
  num * num;
});

// question 3 - what is the return of map in the code below
// returns [1,4,9] since this is a single line, the return is implied
[1,2,3].map(num => num * num);

//question 4 - what is the return value of the following statement
// pop destructively removes the last element of the array
// and returns it... the length therefore measures caterpillar
['ant', 'bear', 'caterpillar'].pop().length

// question 5 - what does this return?
// soln - 2,4,6 get logged and since the expression is truthy,
// every returns true

let newArr = [1, 2, 3].every(num => {
  return num = num * 2;
});

// question 6 - how does array.prototype.fill work
// changes all elements in an array to a static value
// it is destructive

let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

//question 7 - What is the return value of map in the following code? Why?
// since 'ant'.length is NOT greater than 3
// the elem is not returned and map returns undefined
// soln - [undefined,'bear']
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

//question 8 - create an object where the names are the keys
// and the values are the positions in the array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
function createObject(arr) {
  let object = {};
  // should use forEach here, because it solely involves iteration
  arr.map((elem,index) => {
    object[elem] = index;
  });
  return object;
}
console.log(flintstones);
console.log(createObject(flintstones));

// question 9 - add up all the ages (values within the munster obj)
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Object.values(ages).reduce((agesSum,currAge) => agesSum + currAge,0));

// question 10 - pick out the min age from the munster family object

let ages2 = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Math.min(...Object.values(ages2)));

// question 11- Create an object that expresses the
// frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";
function stringFrequency(string) {
  let result = {};
  let newString = string.split('').filter(char => char !== ' ');
  newString.forEach((elm) => {
    if (Object.keys(result).includes(elm)) {
      result[elm] += 1;
    } else {
      result[elm] = 1;
    }
  });
  return result;
}

console.log(stringFrequency(statement));