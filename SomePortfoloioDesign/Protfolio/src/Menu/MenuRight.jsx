import React from "react";
import { FaTimes } from "react-icons/fa"; // Importing close icon
import Logo from "../log/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { RightSideContent } from "../apis/RightBarContent";
// Menu right
const MenuRight = (props) => {
  // menuOpen={menuOpen} setOpen={setOpen}
  const nav = useNavigate()
  const CloseBars = () =>{
    nav('/')
    props.setOpen(false);
  };

  return (
    <div className="  text-justify  bg-backImage bg-cover bg-center shadow-lg  h-full relative p-1">
      <div className=" flex justify-end  font-[u7] px-2 items-center relative">
        <div
          onClick={CloseBars}
          className=" text-white flex cursor-pointer items-center justify-center p-2 rounded-full transition-transform transform hover:scale-110"
        >
          <FaTimes className="text-white size-12"/> {/* Adding close icon */}
        </div>
      </div>

      {/* Added contents */}
      <div className="  flex items-center justify-center  mt-32  text-white  font-semibold">
        <div className=" cursor-pointer flex items-center gap-12  text-2xl justify-center   capitalize">
          {RightSideContent.map((item, index) => (
            <div key={index} className=" flex ">
              <Link to={item.Path}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuRight;
