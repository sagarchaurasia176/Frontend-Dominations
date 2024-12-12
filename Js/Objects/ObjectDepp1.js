const APi = {
  name: function () {
    // its an obj method,
    console.log(this)
    function Data() {
      // This is window function => which give you the window data
      console.log(this);
    }
    Data();
  },
  // this 2nd
  age: "12",
  // this is 3rd
  data: "12",
};
APi.name();
