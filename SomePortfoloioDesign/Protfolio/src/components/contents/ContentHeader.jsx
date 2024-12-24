import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

// ContentHeader Component
const ContentHeader = () => {
  const textRef = useRef(null);
  const textRefs = useRef(null);

  // useGsap
  useGSAP(() => {
    gsap.from(textRef.current, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      scale: 1.5,
    });
  });

  // useGsap
  useGSAP(() => {
    gsap.from(textRefs.current, {
      duration: 1,
      x: 100,
      autoAlpha: 0,
      scale: 1.7,
      stagger: 0.05,
    });
  });

  const textRefss = useRef(null);
  useGSAP(() => {
    gsap.to(textRefss.current, {
      scale: 1.5,
      stagger: 0.05,
      duration: 1,
      opacity: 4,
      ease: "power1.inOut",
    });
  });

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <code className=" text-white text-1xs" ref={textRefss}>
          Hello World ! My name is
        </code>
      </div>

      <div className=" flex justify-center">
        <h1
          ref={textRef}
          className="  text-center font-extrabold text-slate-100"
        >
          Sagar &nbsp;
        </h1>
        <h2 ref={textRefs} className=" text-center  text-yellow-400 ">
          Chaurasia
        </h2>
      </div>
    </div>
  );
};

export default ContentHeader;
