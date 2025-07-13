// // how to used the call , apply and bind ?

// // call means - to update the fn()

// // we've the objects therefore we can get

// const Api = {
//   name: "sagar",
// };
// const NwApi = {
//     name: "raj",
//   };


// function ModifyAPI(name) {
//   console.log(`${name} , ${this.name}`);
// }
// ModifyAPI.call(NwApi, "Hello");


// // how to used the Apply in js

// function Applys(a , b ,c){
//         console.log(a , b ,c);
// }
// Applys.apply(this,[1,2,3]);


// // How to used  the bind in js
const userName = {
    name:"surbhi"
}

function Binds(){
    console.log("Hello" + this.name + " ");
}
let val = Binds.bind(userName);
val()