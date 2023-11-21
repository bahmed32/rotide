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

// // };


module.exports = eqArrays;
