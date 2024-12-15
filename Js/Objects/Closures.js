// closures is nothing just return another function ()

// 1 -> way
function obj() {
  return function dt() {
    console.log("Sagar");
  };
}
obj();
// 2 - way
function data() {
  let obj = 0;
  return {
    getVal: function () {
      console.log(obj);
      obj++;
    },
    setVal: function () {
      console.log(obj);
      obj--;
    },
  };
}
const cnt = data();
console.log(cnt.getVal());

// add two number
function add(num1, num2) {
  return function (val) {
    val = num1 + num2;
    console.log("totoal sum");
    console.log(val)
  };
}
const val = add(1, 2);
console.log(val());
