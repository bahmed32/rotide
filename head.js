const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
//   return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
// };

const head = function(array) {
    if (!array.length) {
      return undefined;
    }
  if (array.length === 1) {
    return array[0];
  }
    return array[0];
  };




  // iterate through array
  // slice the first item off the array 



module.exports = head;

console.log(assertEqual(head([]), undefined));
console.log(assertEqual(head([5]), 5));
console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));