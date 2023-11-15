const assertEqual = require('./assertEqual');


const tail = function(array) {
  if (array.length === undefined) {
    return undefined;
  }

  if (array.length > 0) {
    return array.slice(1);

  }
  return array.length;


};
const nothing = tail([]);
const result = tail(["Hello", "Lighthouse", "Labs"]);

console.log(assertEqual(nothing.length, undefined));
console.log(assertEqual(result.length, 2));
console.log(assertEqual(result[0], "Lighthouse"));

