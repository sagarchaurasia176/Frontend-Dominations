import React from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

// Sub Header Component
const SubHeader = () => {
  const textRef = useRef(null);
  // upper Text Handler
  const UpperTextHandler = ()=>{
  let clutter = ""
    let splitTxt = textRef.current.textContent.split('');
    splitTxt.forEach((e) => {
      clutter += `<span>${e}</span>`
    })
    textRef.current.innerHTML = clutter;
}
useGSAP(()=>{
  gsap.from(textRef.current,{
      y:100,
      duration:1,
      stagger:0.02,

  })


})


// retunr the JSX !
  return (
    <div className="">
      <div className=" flex items-center justify-center">
        {/* text */}
        <h1 onClick={UpperTextHandler} ref={textRef} className="  flex justify-center items-center  text-6xl  p-2 font-extrabold  text-white rounded-lg text-orange-20">
          I Love To
        </h1>
        <br />

        <h1 className=" bg-orange-800 rounded-e-full p-2   animate-pulse">
          Explore & Code
        </h1>
      </div>
      
    </div>
  );
};

export default SubHeader;
