// ➡️ How to create the custom Events
// 🅰️ with the help of new Event();

let userType = new Event("types");
//parent
let parentsID = document.querySelector("#parent");
//data visibel
let container = document.querySelector("#container");
//triggered button
let triggerd = document.querySelector('#triggerd');

//ParentsID
parentsID.addEventListener("types", (e) => {
  for (let index = 0; index < 5; index++) {
    setTimeout(()=>{
        container.innerHTML +=    
        `<span style ="color:red">sagar </span><br>`;
    },index)
  
}   
    console.log("event triggered");
});

triggerd.addEventListener('click' , ()=>{
        parentsID.dispatchEvent(userType);

})
