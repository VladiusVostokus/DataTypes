'use strict';

/*const countTypesInArray = [true, 'hello', 5, 12, -200, false, false, 'word'];
  const typeNames = { number: 0, string: 0, boolean: 0 };

for (const elem of countTypesInArray){
  if (typeof elem === 'number') typeNames.number += 1;
  if (typeof elem === 'string') typeNames.string += 1;
  if (typeof elem === 'boolean') typeNames.boolean += 1;
}

console.dir(typeNames);*/

const countTypesInArray = (arr) => {
  const counters = {};
  for (const element of arr) {
    const type = typeof element;
      counters[type]?
      counters[type] += 1:
      counters[type] = 1;

  }
  return counters;
};

console.dir(countTypesInArray([1, 2, true, false, 'a', 'b']));
//module.exports = { countTypesInArray };
