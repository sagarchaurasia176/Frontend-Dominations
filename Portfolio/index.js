gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// time line applied there so we get !
var tl = gsap.timeline();
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

gsap.from(".cards .content-of-card", {
  transition: "all 2s",
  x: -500,
  stagger: 1,
  rotate: 0, // Rotate the element by 15 degrees (adjust as needed)
  scrollTrigger: {
    trigger: ".cards",
    scroller: "#main",
    start: "top 0",
    end: "top -50%", // Adjust the end position as needed
    scrub: true,
    pin: true,
  },
});

// text mover applied there so we get !
gsap.to(".text-with-the-scroller .text", {
  transform: "translateX(-105%)",
  transition: "all 2s",
  // Scroll Trigger applied there so we get
  scrollTrigger: {
    trigger: ".text-with-the-scroller",
    scroller: "#main",
    start: "top 0",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
