function locomotive() {
  gsap.registerPlugin(ScrollTrigger);
  // locoscroll applied it here
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("#main", ScrollTrigger.update);
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
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
}
locomotive();
// gsap config
function loaderText() {
  gsap.to(".line-1 h1", {
    y: -30,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5,
  });
}
loaderText();
function loaderTexts() {
  gsap.to(".line-1 h2", {
    y: -30,
    stagger: 0.8,
    duration: 0.4,
    delay: 0.5,
  });
}
loaderTexts();
// time Line apply it here so we get !
let timeLine = gsap.timeline();
timeLine.from(".line #line-1-part-1 .timer h1", {
  opacity: 0,
  onStart: function () {
    // SETiNTERVALS
    let timers = document.querySelector("#line-1-part-1 .timer h1");
    let cnt = 0;
    // intervals set here so we get
    setInterval(function () {
      if (cnt < 100) {
        timers.innerHTML = cnt++;
      } else {
        timers.innerHTML = 100;
      }
    }, 33);
  },
});
// removes the text here so we get !
timeLine.to(".loader", {
  opacity: 0,
  duration: 0.4,
  delay: 3,
});

//timeLine
timeLine.from(".page-1", {
  opacity: 0,
  y: 100,
  ease: "power4.out",
});


// hero-head-1 h2 moves
timeLine.to('.hero .head-1 h2' , {
  y: 40,
  stagger: 0.1,
})


// call the crsr
document.addEventListener('mousemove' , function(det){
    gsap.to('#crsr' , {
      stagger:0.2,
      left:det.x,
      top:det.y,

    })

})









