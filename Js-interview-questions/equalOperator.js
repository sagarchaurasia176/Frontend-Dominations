// What is the difference between == and === in JavaScript?
// == is the abstract equality operator 
// while === is the strict equality operator. 
// The == operator will compare for equality after doing any necessary type conversions. 
// The === operator will not do type conversion, so if two values are not the same type === will simply return false.

let data = 12;
if(data === 13){
    console.log("data valid" , data);
}else{
    console.log("Data not valid")
}

