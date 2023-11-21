const tail = require("../tail");
const assertEqual = require('../assertEqual');


const nothing = tail([]);
const result = tail(["Hello", "Lighthouse", "Labs"]);

console.log(assertEqual(nothing.length, undefined));
console.log(assertEqual(result.length, 2));
console.log(assertEqual(result[0], "Lighthouse"));
