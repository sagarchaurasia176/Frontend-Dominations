var tl = gsap.timeline();
// time line applied there so we get !

tl.from("#nav-bar .logo", {
  y: -50,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  stageer: 1,
});
tl.from(".nav-list h3", {
  y: -50,
  duration: 1,
  stagger: {
    // wrap advanced options in an object
    each: 0.1,
    from: "center",
    grid: "auto",
    ease: "power2.inOut",
  },
});

tl.from(".header h1", {
  x: -500,
  opacity: 0,
  duration: 2,
  stageer: 0.4,
});

tl.from(".img-boxes img", {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});
