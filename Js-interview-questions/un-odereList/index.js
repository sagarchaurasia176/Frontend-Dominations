let UnOrderParentFruitList = document.querySelector(".fruit-list");
let AddFruit = document.querySelector("#add-fruit-button");
let RemoveFruit = document.querySelector("#remove-fruit-button");
let FruitBoxInputs = document.querySelector("#fruit-input");

// the logic will be when the user click to bttn then add elm
// into the list dynamically


// can we have to extra arr


// How to do 
let arr = [];

AddFruit.addEventListener("click", (e) => {
    e.preventDefault()
    let fruits = FruitBoxInputs.value;
    UnOrderParentFruitList.innerHTML += `<li>${fruits}</li>`

    FruitBoxInputs.value = ""
});


// remove element from the List
RemoveFruit.addEventListener('click', (e) => {
    e.preventDefault();
    let oldFruits = FruitBoxInputs.value;



})