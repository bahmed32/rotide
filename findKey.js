const assertArraysEqual = require("./assertArraysEqual");

//Instruction
// Implement the function findKey which takes in an object and a callback. It should scan the object and return the 
// first key for which the callback returns a truthy value. 
// If no key is found, then it should return undefined.


const findKey = function(obj, callback) {
  // write a holder object 
  // if no key return undefined

  // loop through object 
  for (const key in obj) {
    const item = obj[key];

    const value = callback(item);
    if (value) {
      return key;

    }



  };

  // return wheb value is truthy 
  //push value into holder 
  //return holder 

};

const results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(results);