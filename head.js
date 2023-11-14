// const assertEqual = require('./assertEqual');

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const head = function(array) {
  for (let i = 0; i < array.length; i++)
    if (array.length === 0) {
      return undefined;
    }
  if (array.length = 1) {
    return array[0];
  }
  if (array.length > 1) {
    return array[0];
  }




  // iterate through array
  // slice the first item off the array 

};

console.log(assertEqual(head([]), undefined));
console.log(assertEqual(head([5]), 5));
console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));