'use strict';


function fn(s) {
  ++s;
  console.log(s);
}

fn(4);

module.exports = { fn };
