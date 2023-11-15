const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");


//implement middle which will take in an array and return the middle-most element(s) of the given array.

// shpuld be able o return middle of array regardless of the length of the array 

// for array of 1/2 element no middle 
//for array with odd number of element return single element in the middle
// for array with even element return 2 element in thr middle 

//implement function
// [a, b, c] = b; length = 3; middleIndex = 1;
// [a, b, c, d, e] = c; length = 5; middleIndex = 2;
// legnth = 11; middleIndex = 5;
// middleIndex = (length - 1) / 2

// [a, b, c, d] =[b, c]; length = 4; middleIndex1 = 1; middleIndex2 = 2;
// [a, b, c, d, e, f] = [c, d]; length = 6; middleIndex1 = 2; middleIndex2 = 3;
// middleIndex2 = length / 2;
// middleIndex1 = (length / 2) - 1;

const middle = function(array) {

  // first write filter for array with 1/2 element without 
  if (array.length < 3) {
    return "Please add more inputs into array";
  }

  let middleIndex;
  const result = [];
  if (array.length % 2 === 1) {
    middleIndex = (array.length - 1) / 2;
    result.push(array[middleIndex]);
  }

  if(array.length % 2 === 0){
    const middleIndex2 = array.length / 2;
    const middleIndex1 = middleIndex2 - 1;
    result.push(array[middleIndex1]);
    result.push(array[middleIndex2]);
  }
  return result;
  // //need to check how many element and mainuplate elements in array, so c-style loop 
  // for (let i = 0; i < array.length; i++) {
  //   // If array is an odd number // slice front and back
  //   //return 1 element 
  //   let result = array.slice(1,2);
  //   if (array.length % 2 === 0){
  //     return array.slice(1,2)
  //   }

  //   if(array.length - 1 % 2 === 0){
  //     return 
  //   }

  // if array is postiive 
  // return 2 elements in middle 
};

console.log(middle([1])); // => []
console.log(middle([1, 2]));

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));