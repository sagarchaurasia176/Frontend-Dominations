import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { RightSideContent } from "../apis/AboutMe";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutPage = (props) => {
  const homeRef = useRef(null);
  const menuRef = useRef(null);
  const tl = gsap.timeline();

  // Line Load GSAP Animation
  useEffect(() => {
    tl.to(homeRef.current, {
      y: "-100%",
      opacity: 1,
      duration: 1,
      delay: 0.3,
      ease: "expo.out",
    });
  }, []); // Empty dependency array ensures it runs only once on mount

  // Closing Effects
  useEffect(() => {
    if (props.menuOpen) {
      gsap.to(menuRef.current, {
        top: 0,
      });
    } else {
      gsap.to(menuRef.current, {
        top: "100%",
      });
    }
  }, [props.menuOpen]); // Runs when `props.menuOpen` changes

  const nav = useNavigate()
  // Close the Menu
  const CloseBars = () => {
    nav('/Menu')
    props.setOpen(true);
  };
  

  return (
    <div
      ref={homeRef}
      className="top-full fixed bg-opacity-100 backdrop-blur-3xl z-50 bg-slate-950 h-full w-full overflow-y-auto"
    >
      {/* Close Button */}
      <div
        onClick={CloseBars}
        className="absolute top-4 right-4 text-white flex cursor-pointer items-center justify-end p-2"
      >
        <FaTimes className="text-3xl bg-slate-900 rounded-2xl sm:text-3xl" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between text-white h-full">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 px-6 py-6 sm:px-12 sm:py-12">
          <img
            className="rounded-lg w-full max-w-md mx-auto lg:max-w-full"
            src="https://media.licdn.com/dms/image/v2/D5635AQG87sONhkfIcQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1721465637114?e=1736586000&v=beta&t=9nG-sA0U2IGS-CFu8tikwploqkyYJqXwP_VGdeGkQB8"
            alt="Profile of [Your Name], a student of Computer Science"
          />
        </div>

        {/* Text Section */}
        <div className="w-full px-4 p-4 py-4 text-base sm:text-lg lg:text-xl leading-relaxed">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {RightSideContent.header}
          </h1>
          <p className="text-justify">
            Hello! Interestingly, I have been a student of Computer Science in
            my <b className="bg-red-500 text-white px-1 rounded">Diploma</b> and
            got introduced to programming in my freshman year at{" "}
            <b className="bg-red-500 text-white px-1 rounded">
              Gulzar Group Of Institute.
            </b>
            <br />
            <br />
            My interest in coding started back in 2020 during the first year of
            Diploma. <br /> Since then, I started learning{" "}
            <b className="bg-red-500 text-white px-1 rounded">
              programming languages & solving problems based on data structures
              and algorithms.
            </b>
            <br />
            <br />
            Most importantly, I'm a Problem Solver.
            <br />
            Today, I'm currently pursuing{" "}
            <b className="bg-red-500 text-white px-1 rounded">
              my Bachelor's in Computer Science and Engineering (2023-2026) at
              JAIN (Deemed-to-be University) with{" "}
              <b className="bg-teal-400 text-black px-1 rounded">
                8.79 GPA aggregate..
              </b>
            </b>
            <br />
            <br />I also have knowledge of{" "}
            <b className="bg-green-500 text-white px-1 rounded">
              Web Development
            </b>{" "}
            and have created projects using <br />
            <br />
            <b className="bg-orange-300 text-black px-1 rounded">
              HTML | CSS | JavaScript | React.js | Node.js | MongoDB
            </b>{" "}
            and other cool{" "}
            <b className="bg-blue-400 text-black px-1 p-2 rounded">
              libraries and frameworks.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
