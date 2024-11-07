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

gsap.to(".cards .content-of-card", {
  transition: "all 1s",
  x: -20,
  rotate: 0, // Rotate the element by 15 degrees (adjust as needed)
  scrollTrigger: {
    trigger: ".cards",
    scroller: "body",
    start: "top 0",
    end: "top -50%", // Adjust the end position as needed
    scrub: true,
    pin: true,
  },
});

// text mover applied there so we get !
gsap.from(".text-with-the-scroller .text", {
  transform:"translateX(-105%)",
  transition: "all 2s",
  
  // Scroll Trigger applied there so we get
  scrollTrigger : {
    trigger : ".text-with-the-scroller",
    scroller:"body",
    start:"top 0",
    end :"top -100%",
    scrub : 2,
    pin:true
  }

});
