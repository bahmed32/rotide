const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


//Implement without which will return a subset of a given array, removing unwanted elements.

const without = function(source, itemsToRemove) {
  if (!Array.isArray(source)) {
    return "Please provide an array";
  }
  // initialize holder variable '
  //It should return a new array with only those elements from source that are not 
  //present in the itemsToRemove array.
  let result = [];
  for (let i = 0; 1 < source.length; i++) {
    let found = false;
    //check if numbers in both array to see if they are equal 

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        found = true;
        break;
      }

      if (!found) {
        return result.push(source[i]);
      }

  return result;
    }



  }
  // need to check if the number present in the second array are in the first array

  // if the number are present return a new arrar with only the numbers that werent present 

};
module.exports = without;

// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
// console.log(without([1, 2, 3], [1]));