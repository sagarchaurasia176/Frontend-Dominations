// In JavaScript, a prototype is a mechanism by which objects inherit properties and methods from one another.
function obj(name) {
  this.name = name;
  console.log(name);
}
obj.prototype.prints = function () {
  console.log(this.name);
};

obj.prototype.nickName = "Sagar";

const obj1 = new obj("Sagar");
const obj2 = new obj("cha");
