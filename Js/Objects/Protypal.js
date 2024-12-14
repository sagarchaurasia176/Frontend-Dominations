// protypal -> constructor call to its obj are known as protypal !
function obj(name, age) {
  this.name = name;
  this.age = age;
}
obj.prototype.Data = function () {
  console.log(this.age);
};
let ans = new obj("Sagar", 12);
console.log(ans);



