'use strict';

const countTypesInArray = (arr) => {
  const counters = {};
  for (const element of arr) {
    const type = typeof element;
    const count = counters[type] || 0;
    counters[type] = count + 1;
  }
  return counters;
};

console.dir(countTypesInArray([1, 2, true, false, 'a', 'b']));
//module.exports = { countTypesInArray };
