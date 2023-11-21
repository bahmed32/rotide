const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

console.log(middle([1])); // => []
console.log(middle([1, 2]));

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));
