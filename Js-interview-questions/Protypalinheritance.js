// ➡️Its the modern way of inheritance in javascript with ts.
class Obj{
    constructor(dream){
        this.dream = dream;
    }
}2
//now if you want to add something into it then you can be direclty used like this
Obj.prototype.getVal = function(){
    return this.dream
}
//now you can create a new object from it
let val = new Obj("Become a Full Stack Developer");
console.log(val);






