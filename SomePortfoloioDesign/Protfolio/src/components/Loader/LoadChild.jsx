import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

//Load Child
const LoadChild = () => {
  const lineLoad = useRef(null);
  const tl = gsap.timeline();
  // Line Load gsap applied it !
    useGSAP(()=>{
        tl.to(lineLoad.current , {
            width:"100%",
            duration:1,
            delay:1.10,
            ease:"expo.out"
        }).to(lineLoad.current , {
            opacity:0
        })
    })

  return <div ref={lineLoad} className="w-0 h-3  bg-white rounded-lg"></div>;
};

export default LoadChild;
