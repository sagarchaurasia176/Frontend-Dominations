gsap.registerPlugin(ScrollTrigger);
// locoScroll
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
// gsap scroll trigger
gsap.to(".page-1 h2", {
  duration: 1,
  rotate: 360,
  ScrollTrigger: {
    trigger: ".page-1 h2",
    scroller: "#main",
    pin: true,
    scrub: true,
  },
});

// gsap scroll trigger
gsap.to(".page-2 h2", {
  duration: 1,
  rotate: 360,
  ScrollTrigger: {
    trigger: ".page-1 h2",
    scroller: "#main",
    scrub: true,
    pin: true,
  },
});
