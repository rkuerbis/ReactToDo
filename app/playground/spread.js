
var c;

function add (a, b) {
  return a + b;

};

c = add(3, 1);

console.log(c);

var toAdd = [9, 5];
console.log(add(...toAdd));
