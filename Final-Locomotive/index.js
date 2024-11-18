function LocoMotive() {
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
}



// gsap applied it here so we get
gsap.to(".page-2 .boxes", {
  rotate: 369,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".page-2 .boxes",
    start: "top 10%",
    end: "top -20%",
    pin: true,
    scrub: 1,
  },
});


// split Text page-1
function SplitText() {
  var text = document.querySelectorAll("#page-1 h1");
  text.forEach(function (ele) {
    var cluster = "";
    var h1Txt = ele.textContent;
    var split = h1Txt.split("");
    //create the cluster
    split.forEach(function (elem) {
      cluster += `<span>${elem}</span>`;
    });
    ele.innerHTML = cluster;
  });
}

SplitText();

// Gsap trigger
function GsapTrigger() {
  gsap.to("#page-1 h1 span ", {
    color: "blue",
   opacity:1,
    stagger:0.4,
    scrollTrigger: {
      trigger: "#page-1 h1",
      scroller: "body",
      start: "top 10%",
      end: "top -10%",
      pin: true,
      scrub: 1,
    },
  });
}
GsapTrigger();




// next page-3 
function Texts() {
  const txtElement = document.querySelector(".page-3 .boxes h2");
  const text = txtElement.textContent;
  
  // Split the text and wrap each character in a span
  let clutter = "";
  text.split("").forEach(function (char) {
    clutter += `<span>${char}</span>`;
  });
  // Set the updated HTML content
  txtElement.innerHTML = clutter;
}
Texts();




gsap.to(".page-3 .boxes h2 span", {
  color: "yellow",
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".page-3 .boxes",
    scroller: "body",
    start: "top 10%",
    end: "top -20%",
    pin: true,
    scrub:3,
  },
});


// LocoMotive();
//
