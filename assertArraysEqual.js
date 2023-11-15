const eqArrays = require("./eqArrays");


  // Implement; assertArraysEqual; which; will; take in two; arrays and console.log; an;
  //  appropriate; message; to; the; console.

  const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      return (`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    }
  return (`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
};
  

// console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
// console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 5]), false)); // =>

module.exports = assertArraysEqual;
