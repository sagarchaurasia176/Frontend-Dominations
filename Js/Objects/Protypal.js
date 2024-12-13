// protypal
function makeHumn() {
  this.name = "sagar";
}

makeHumn.prototype.PrintData = function () {
  console.log(`hi my name is ${this.name}`);
};

makeHumn()







