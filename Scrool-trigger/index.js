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

gsap.from(".img-div img", {
  x: 300,
  duration: 3,
  delay: 1,
  scale: 10,
  scrollTrigger: {
    trigger: ".img-div img",
    scroller: "body",
    start: "top bottom",
    end: "center center",
    scrub: true,
  },
});

// page-2

gsap.to("#page-2 img", {
  width:"80%",
  scrollTrigger: {
    trigger: "#page-2",
    scroller: "body",
    start: "top  0",
    end: "top -100%",
    scrub: true,
    pin:true
  },
});
