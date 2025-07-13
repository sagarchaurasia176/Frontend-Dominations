//Container created here 
const container = document.querySelector('#container');

//create my own events
const events = new Event('sagar');

//listener creates here therefore we can get's

container.addEventListener('sagar' , (e)=>{     
    for(let i=0; i<5; i++){
        let elementsContainer = document.createElement('div');
        elementsContainer.innerHTML = `<h1>sagar</h1>`;
        container.appendChild(elementsContainer);
    }
})

//conatiner Events stuffs 
container.dispatchEvent(events);


