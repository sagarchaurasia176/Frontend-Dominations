function HigherorderFn(name){
    
    return function InnerFunction(){
        console.log("inner function ");
    }
}
HigherorderFn("Sagar")();

