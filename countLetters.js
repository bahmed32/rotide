const assertEqual = require("./assertEqual");

//The function should take in a sentence (as a string) and then return a count of each of the letters 
// in that sentence.

// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.




const countLetters = function(str) {
  // have a place to put the string 
  const result = {};
//loop through items in string aka the letter
  for (const letter of str) {
    // if we dont have the letter in new empty object, initialize the letter value to 0
    if(!result[letter]){
        result[letter] = 0

    }
        result[letter]++;
  }
  //       results[item] += 1;
  //     } else {
  //       results[item] = 1;
  //     }
  //   }
  // }
  return result;

};
const expected = {
  l: 1,
  i: 1,
  g: 1,
  h: 2,
  t: 1,
  o: 1,
  u: 1,
  s: 1,
  e: 1

};

result = countLetters("lighthouse");
console.log(result);
