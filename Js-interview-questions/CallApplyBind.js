const obj = { name: "John" };
//greet.call(obj); // {name: "John"}

function greet(a, b, c) {
  console.log(this, a, b, c);
}
//call methods
greet.call(obj, 1, 2, 3);
// apply methods.
greet.apply(obj, [1, 2, 3]);

//how to used the bind
function data(a, b, c) {
  console.log(this, a, b, c);
}
greet.bind(this, 1, 2, 3);
