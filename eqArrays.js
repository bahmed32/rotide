const assertEqual = require('./assertEqual');

//Instruction
// Implement a function eqArrays which takes in two arrays and returns true or false, based on a
//  perfect match.


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return "arrays are not equal";
  }

  // loop through array to check indivdual numbers 
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }

    return true;
  }
};


//   // loop through another array 
//   for (let j = 0; j < array2.length; j++)

//compare the 1st array to the second array 

// };
console.log(eqArrays([1, 2, 3], [1, 2])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); 

console.log(assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 2]), false)); // =>


module.exports = eqArrays;
