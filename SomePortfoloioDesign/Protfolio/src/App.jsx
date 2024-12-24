import React, { useRef } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Navabar/Header";
import Section1 from "./components/FirstSection/Section1";
import LoadParent from "./components/Loader/LoadParent";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ContentHeader from "./components/contents/ContentHeader";
import SubHeader from "./components/contents/SubHeader";
import MenuPage from "./Menu/MenuPage";
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


  return (
    <>
      {/* Loading */}
      <div className="h-screen   w-full">
        {/* This is basically a black screen  */}
        <div
          ref={homeRef}
          className="h-screen w-full z-10 fixed bg-gradient-to-l from-blue-800 via-black  bg-opacity-50 backdrop-blur-lg"
        >
          {/* <MenuPage/> */}
          <LoadParent />
          <div className=" h-screen my-32 lg:my-32 ">
            <div className="">
              <ContentHeader />
              {/* texts */}
            </div>
            <SubHeader />
          </div>
        </div>

        {/* header */}
        <div className=" h-screen w-full  bg-backgroundImage   bg-cover bg-center">
          <Header />
          {/* navbar */}
          <Routes>
            <Route path="/" element={<Section1 />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
