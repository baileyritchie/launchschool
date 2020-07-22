// A practice problem focusing on informal and formal pseudocode

// a function that takes an array of strings, 
// and returns a string that is all those strings concatenated together

/* INFORMAL
  create an empty string variable
  iterate through the array of strings
    for each element in the array, add it to the variable created earlier
  print the variable when the loop is finished
  
  FORMAL pseudocode

  START

  SET result = ""
  SET iterator = 0
  WHILE iterator < length of array
    SET result += value of array at iterator space
  PRINT result

  END

*/

joinString = (arr) => {
  let result = "";
  arr.forEach((elm)=>{
    result += elm
  })
  return result;
}

console.log(joinString(["a","b","c","d"]));