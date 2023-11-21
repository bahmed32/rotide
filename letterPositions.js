const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

// //We'll implement a new function letterPositions which will return all the indices (zero-based positions)
//  in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of occurrences,
//  multiple numbers may be needed to represent all the places in the string that it shows up.


const letterPositions = function(str) {
  //new empty object to place each letter after 
  const result = {};
  //get rid of spaces in string
 
  // lets loop through each array to scan the letter
  const string = str.split(' ').join('');
  
  for (let i = 0; i < string.length; i++) {
    const char = string[i]
  
   
      //if result mot in str index not in new object; add into new object
    if(!result[char]){
    result[char] = [i];
    } else{
    result[char].push(i);
    }
  }
return result
  //return new object with the charac indexes at
 

};

///Output expectation


module.exports = letterPositions;
// //output 
//{
// //h:0
// //e::1
// //l:2,3
// //o: 4
//}
// console.log(letterPositions("hello"))
// console.log(letterPositions("hello world"))

// console.log(assertArraysEqual(letterPositions("Hello").e, [1]));