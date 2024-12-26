import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Navabar/Header";
import LoadParent from "./components/Loader/LoadParent";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MenuPage from "./Menu/MenuPage";
import HeaderTextsAboutMe from "./components/Loader/HeaderTextsAboutMe";
// Import the necessary functions or values from shrey.js

// App Component
const App = () => {
  const homeRef = useRef(null);
  const tl = gsap.timeline();

  // Line Load gsap applied it !
  useGSAP(() => {
    tl.to(homeRef.current, {
      y: "-100%",
      opacity: 1,
      duration: 2,
      delay: 4.0,
      ease: "expo.out",
    });
  });

  const [menuOpen, setOpen] = useState(false);
  return (

    <>
      {/* Loading */}
      <div className="h-screen w-full">
        {/* This is basically a black screen */}
        <div
          ref={homeRef}
          className="h-screen w-full z-10 fixed bg-gradient-to-l from-blue-800 via-black bg-opacity-50 backdrop-blur-lg"
        >
          {/* Loading line */}
          <LoadParent />
          <HeaderTextsAboutMe />
        </div>
          <MenuPage menuOpen={menuOpen} setOpen={setOpen}   />
        {/* header */}
        <div className="h-screen w-full bg-backgroundImage">
          <Header menuOpen={menuOpen} setOpen={setOpen} />
        </div>

      </div>
    </>
  );
};

export default App;
