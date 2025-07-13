//create the custome events :.
const evnt = new Event("sagar");

let parn = document.querySelector('#parents');

parn.addEventListener('sagar' , (ev)=>{
    if(ev.target.id == "play"){
        console.log("sagar event triggered");
    }
})
parn.dispatchEvent(evnt);

