const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};



module.exports = assertEqual;
