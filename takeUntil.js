// // The function will return a "slice of the array with elements taken from the beginning." It should keep going until the 
// callback/predicate returns a truthy value.

// To keep things simple, the callback should only be provided one value: The item in the array.

// Instruction
// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.


const takeUntil = function(array, callback) {
  // create holder for resulta array
  let result = [];
  //loop through array 
  for (let item of array) {
    const value = callback(item);
    if (value) {
      break;
    }

    result.push(item);

  }
  return result;
};

// if value return =  truthy value 

// return results 




// Expected Input
// For illustration purposes, here are some examples of how our function could be used and 
// what the expected results would look like.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
// Expected Output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

module.exports = takeUntil; 
