import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

// Sub Header Component
const SubHeader = () => {
  const textRef = useRef(null);
  const textRefs = useRef(null);
  const splitText = new SplitText(textRef , {
    type:"chars"
  })
  
  useGSAP(()=>{
    gsap.from(splitText.chars, {
      duration: 1, 
      y: 100, 
      autoAlpha: 0, 
      stagger: 0.05
    });

  })


  // useGSAP(() => {
  //   let clutter = "";
  //   let splitTxt = textRef.current.textContent.split(' ');
  //   splitTxt.forEach((word) => {
  //     clutter += `<span>${word}</span><br/>`;
  //   });
  //   textRef.current.innerHTML = clutter;

  //   // gsap
  //   gsap.from("h1 span", {
  //     opacity: 0,
  //     delay:1,
  //     stagger: 0.02,
  //   });
  // });




  // return the JSX !
  return (
    <div className="">
      <div className="flex items-center justify-center">
        {/* text */}
        <h1 ref={textRef} className="  font-[u8] flex gap-4  justify-center items-center text-6xl p-2 font-extrabold text-white rounded-lg text-orange-20">
          I  Love <h1>👨🏽‍💻</h1>To
        </h1>

        <h1 className=" bg-gradient-to-r from-violet-950 to- rounded-e-full p-2 animate-pulse">
          Explore & Code
        </h1>
      </div>
    </div>
  );
};

export default SubHeader;
