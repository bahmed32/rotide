const head = require("../head");
const assert = require('chai').assert;


describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns [] for undefined", () => {
    assert.strictEqual(head([undefined]), undefined);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

});





// console.log(assertEqual(head([]), undefined));
// console.log(assertEqual(head([5]), 5));
// console.log(assertEqual(head([5, 6, 7]), 5));
// console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));