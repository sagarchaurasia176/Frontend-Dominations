//access to the parent elements.
let prnts = document.querySelector('#parents');
//access to the child elements stuffs
prnts.addEventListener("click", (events) => {
  if (events.target.id === "play") {
    console.log("play");
  } else if (events.target.id === "pause") {
    console.log("pause");
  }
});



