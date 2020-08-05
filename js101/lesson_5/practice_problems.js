// question 1 order the array by descending numeric value

let arr = ['10', '11', '9', '7', '8'];

arr.sort((a,b) => {
  return Number(b) - Number(a);
});

//console.log(arr);
// question 2 - sort the following books based on year published in ascending order
let books =
[{ title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a,b) => {
  return Number(a.published) - Number(b.published);
});

console.log(books);

// question 3- for each collection, demonstrate how to access 'g'
/*
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);
/*
/*
let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1]['third'][0]);
*/
/*
let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2]['third'][0][0]);
*/
/*
let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1['b'][1]);
*/
/*
let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
console.log(Object.keys(obj2['third'])[0]);
*/
// queestion 4, in each of these objects, changee the value from 3 to 4

let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
console.log(arr1);
let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
console.log(arr2);
let obj1 = { first: [1, 2, [3]] };
obj1['first'][2][0] = 4;
console.log(obj1);
let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2['a']['a'][2] = 4;
console.log(obj2);

// question 5 - compute and display the total age of the MALE members of the fam

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
let details = Object.values(munsters);
let age = 0;
details.forEach((detail) => {
  if (detail.gender === 'male') {
    age += detail.age;
  }
});
console.log(age);

// alternatively
let totalAge = 0;
for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalAge += munsters[member]['age'];
  }
}
console.log(totalAge);

// question 6 - print out the data from munsters object in this pattern
// (Name) is a (age)-year-old (male or female).

for (let member in munsters) {
  console.log(`${member} is a ${munsters[member].age}-year-old ${munsters[member].gender}.`);
}

// question 7-determine the final values of a and b
// soln a=2 and b=[5,8] because we did not change the VARIABLE
// we changed the value WITHIN the array
/* let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a; */

// however arr = [ 4, [ 3, 8 ] ] is changed

// question 8 - use the forEach method to output all vowels from the
// strings in the array

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
let vowels = 'aeiou';
Object.entries(obj).forEach((elm) => {
  let result = elm[1].join("").split("");
  result.forEach((char) => {
    if (vowels.includes(char)) {
      console.log(char);
    }
  });
});

// question 9 - given the following array, return a new array but with the sub
// arrays ordered alphabetically or numrically
let manySubArr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let resultArr = manySubArr.map((arr) => {
  if (typeof arr[0] === 'number') {
    return arr.slice().sort((a,b) => a - b);
  } else return arr.slice().sort();
});

console.log(resultArr);

// question 10 - now sort the previous array in descending order

let descendArr = manySubArr.map((arr) => {
  if (typeof arr[0] === 'number') {
    return arr.slice().sort((a,b) => b - a);
  } else {
    return arr.slice().sort((a,b) => {
      if (a > b) {
        return -1;
      } else if (a < b) {
        return 1;
      } else return 0;
    });
  }
});

console.log(descendArr);

// question 11 - given the following data structure, use the
// map method to return a new identical array with each number
// increment by 1, do not mutate the arr

let arr11 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let increasedArr = arr11.map((obj) => {
  let incrementedObj = {};
  Object.keys(obj).map((key) => {
    incrementedObj[key] = obj[key] + 1;
  });
  return incrementedObj;
});

console.log(increasedArr);
console.log(arr11);


// question 12 - given the following, use methods such as filter, to
// return a new identical in structure array but only contains 
// multiples of three

let arrNeedsThrees = [[2], [3, 5, 7], [9], [11, 15, 18]];

let threesArr = arrNeedsThrees.map((subArr) => {
  return subArr.filter((val) => val % 3 === 0);
});

console.log(threesArr);

// question 13 - sort the arr so that sub-arrays
// are ordered based on the sum of the odd numbers that they contain

let beforeOddSumArr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let oddSorted = beforeOddSumArr.sort((a,b) => {
  let oddSumA = a
    .filter( num => num % 2 === 1).reduce((sum,next) => sum + next);
  let oddSumB = b
    .filter( num => num % 2 === 1).reduce((sum,next) => sum + next);
  return oddSumA - oddSumB;
});

console.log(oddSorted);

// question 14 - write some code to return an array containing
// the COLORS of the fruits and the SIZES of the vegetables

let fruitObj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let newFruitArr;
let capitalize = word => word[0].toUpperCase() + word.slice(1);

let finalFruit = Object.values(fruitObj).map((obj) => {
  if (obj.type === 'fruit') {
    return obj.colors.map((char) => capitalize(char));
  } else {
    return obj.size.toUpperCase();
  }
});
console.log(finalFruit);

// question 15 - return an array which contains only the objects where
// all the numbers are even

let arrforEvens = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let evenArrays = arrforEvens.filter( obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every( num => num % 2 === 0 );
  });
});

console.log(evenArrays);

// question 16 - write some code that transforms the arr to an obj
// where the first elm of the arr is the key and 2nd is the value

let arrBeforeObject = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let resultObj = {};

arrBeforeObject.forEach((arr) => {
  resultObj[arr[0]] = arr[1];
});
console.log(resultObj);

function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }
    console.log(uuid);
    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}

console.log(generateUUID());
