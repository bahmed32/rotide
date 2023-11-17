const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const result = [];
  for (let item of array) {
    result.push(callback(item));

  }
  return result;
};

const result1 = map(words, word => word[0]);
console.log(result1);
assertArraysEqual(map(result1["ground"], "g"))
