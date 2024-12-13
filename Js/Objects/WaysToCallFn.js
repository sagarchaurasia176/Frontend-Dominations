//Global window
console.log(this);
//function -  wind
function abc() {
  console.log(this);
}
abc();

//fnc inside method es5 - window
let obj = {
  // this is here method
  name: function () {
    //here it give you the obj val !
    console.log(this);
    function agae() {
      console.log(this);
    }
  },
  age: 12,
};
obj.name();

//fnc - inside method es6 - object
let data = {
  Data: function () {
    const arr = () => {
      console.log("in the arr function it gives u the same val");
      console.log(this);
    };
    arr();
  },
};
data.Data();
// constructor fnc mein this ki val - new blank obj
//event listener mein this ki val - that elem jispar event lis laga ho !
