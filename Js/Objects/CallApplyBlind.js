//apply call
const obj = { name: "sagar" };
function objs() {
  console.log(this);
}
// objs.call(obj);
objs.call(obj);

// //apply bind
// objs.bind(obj);

function abc(a, b, c) {
  console.log(this, a, b, c);
}
abc.apply(obj, [1, 2, 3]);

// //apply [apply]
// objs.apply(obj);
