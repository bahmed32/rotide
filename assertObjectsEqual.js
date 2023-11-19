const eqObjects = require("./eqObjects");
const inspect = require('util').inspect;

const assertObjectsEqual = function(actual, expected) {
  const inspectActual = inspect(actual);
  const inspectExpected = inspect(expected)
 
  if (eqObjects(actual, expected)) {
    return (`🛑🛑🛑 Assertion Failed: ${inspectActual} !== ${inspectActual}`);
  }
return (`✅✅✅ Assertion Passed: ${inspectActual} === ${inspectExpected}`);
};

const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
console.log(assertObjectsEqual(obj1, obj2)); // true

const obj3 = { x: 1, y: { z: 2, w: 3 } };
const obj4 = { x: 1, y: { z: 2, w: 3 } };
console.log(assertObjectsEqual(obj3, obj4)); // true

const obj5 = { a: 1, b: 2 };
const obj6 = { a: 1, b: 3 };
console.log(assertObjectsEqual(obj5, obj6)); false

console.log(`Example label: ${inspect(obj5, obj6)}`);