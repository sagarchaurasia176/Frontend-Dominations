// gsap.to("#box", {
//   rotation: 360,
//   x: 500,
//   duration: 1,
//   backgroundColor: "yellow",
// });

// gsap from
var tl = gsap.timeline({

});

gsap.to("#box", {
  rotation: 360,
  x: 500,
  duration: 1,
  delay:1,
  backgroundColor: "green",
});

gsap.to("#box-1", {
  rotation: 360,
  x: 500,
  duration: 3,
  backgroundColor: "green",
});

gsap.to("#box-2", {
  rotation: 360,
  x: 500,
  duration: 5,

  backgroundColor: "green",
});
