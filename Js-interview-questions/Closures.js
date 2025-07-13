

// function makeCounter() {
//     //this upper scope is called as the lexical scope
//     let cnt = 0;
  
//     return function(){
//         cnt++;
//         console.log(cnt);
//         return cnt;
//     }
// }
// // This function returns a closure that maintains its own private state
// let data = makeCounter();
// data(); // 1


// es-6

const counter = ()=>{
    let cnt = 0;
    //setTimeout is an asynchronous function, so it will not block the execution of the code
    return datas =()=>{
        setTimeout(()=>{
            cnt++;
            console.log(cnt);   
        })
    }
}
let ans = counter()(); 
// As here the first () gives you the inner function and the second () executes the outer functions. 
// [Function: datas]
console.log(ans()); // [Function: datas]



