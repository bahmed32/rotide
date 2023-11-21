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

module.exports = tail;

