const assert = require('chai').assert;
const middle = require("../middle");

console.log(middle([1])); // => []
console.log(middle([1, 2]));

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));

describe("# middle", () => {

  it(" return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
  });

  it(" return [2,3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it(" return 'Please add more inputs into array' for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), "Please add more inputs into array");
  });

});
