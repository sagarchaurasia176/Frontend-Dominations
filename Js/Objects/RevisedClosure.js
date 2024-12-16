// how closures works
// function obj() {
//   return function name() {
//     console.log("Sagar");
//   };
// }
// let ans = obj();
// console.log(ans());
// obj()

// ---Closures-------------
// function obj() {
//   let data = "Api";
//   var abs = function () {
//     console.log(data);
//   };
//   return abs;
// }
// obj()

// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   return displayName();
// }
// init();

function num() {
  let a = 4; // local scope !
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
let ans = num();
console.log(ans())
