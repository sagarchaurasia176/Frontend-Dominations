import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

//Load Child
const LoadChild = () => {
  const lineLoad = useRef(null);
  // Line Load gsap applied it !
    useGSAP(()=>{
        gsap.to(lineLoad.current , {
            width:"100%",
            duration:2.1,
            delay:1.6,
            ease:"power4.out"
        })
    })

  return <div ref={lineLoad} className=" w-0 h-full bg-white rounded-lg"></div>;
};

export default LoadChild;
