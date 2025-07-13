//closures - means call the fn() inside the another fn()
function parent(){
    return childFn=()=>{
        console.log("sagar");
    }
}
parent()();

