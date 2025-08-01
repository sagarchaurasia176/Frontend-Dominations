function* printNums() {
  console.log("started");
  yield 1;
  console.log("next orint");
  yield 2;
}
let ans = printNums();
console.log(ans.next());
console.log(ans.next());
console.log(ans.next());



//print 1 - 10
function * printOneTON(){
    for(let i=0; i<4; i++){
        yield i;
    }
}
const number = printOneTON();
console.log(number.next().value);
console.log(number.next().value);
console.log(number.next().value);
console.log(number.next().value);
console.log(number.next().value);
