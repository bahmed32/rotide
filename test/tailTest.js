const tail = require("../tail");
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


// const nothing = tail([]);
// const result = tail(["Hello", "Lighthouse", "Labs"]);

// console.log(assertEqual(nothing.length, undefined));
// console.log(assertEqual(result.length, 2));
// console.log(assertEqual(result[0], "Lighthouse"));


describe("#tail", () => {

  it("returns undefined for empty array", () => {
    assert.deepEqual(tail([]), undefined);
  });

  it("returns['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});

