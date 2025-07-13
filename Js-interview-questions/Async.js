// Its an example of how to use setTimeout in JavaScript

// it executes 1 time only
// setTimeout( ()=>{
//     console.log("hey");

// },2000);

// //it executes 3 times with 1 second interval
// setInterval(()=>{
//     console.log("hello");
// },3000)
// let stopInterval = clearInterval(setInterval);

// How to used async fetch then  in JavaScript
// let randomUser = async ()=>{
//     let res = await fetch("https://randomuser.me/api/")
//     .then(response => response.json()).then(data=>{
//         console.log(data.results[0].name.first);
//     }).catch(err => {
//         console.log("error", err);
//     });
// }
// randomUser();

// // //fetch apis
// const randomeUser = async () => {
// try{
//     let res = await fetch("https://randomuser.me/api/");
//     let data = await res.json();
//     console.log(data.results[0].name.first);

// }catch(err){
//     console.log("error", err);
// }

// };
// randomeUser()

// // console.log(randomeUser());
// How to used the axios in JavaScript
// let randomUser = async () => {
//     let res = await axios.get("https://randomuser.me/api/")
//     .then(res=>{
//         console.log(res);
//     })

// }
// randomUser();

//How to used the promises in JavaScript

// let randome = async()=>{
//     return new Promise((res,rej)=>{
//       let data =  await axios.get("https://randomuser.me/api/");

//     })

// }
