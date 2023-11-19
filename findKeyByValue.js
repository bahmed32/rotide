const assertEqual = require("./assertEqual");

// Implement the function findKeyByValue which takes in an object and
//a value. It should scan the object and return the first key which 
//contains the given value. If no key with that given value is found,
//then it should return undefined.

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
const findKeyByValue = function(object, value) {
  //scan through object using object.keys 

  for (let key in object) {
    if (object[key] === value) {
      return key;
    }

  }

  // return key;
return undefined;


};




console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));