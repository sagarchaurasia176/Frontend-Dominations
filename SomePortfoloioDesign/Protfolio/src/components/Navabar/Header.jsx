import React from "react";
import Logo from "../../log/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className=" flex w-full p-2 b shadow-sm justify-between px-6 py-1  items-center">
        <div className=" flex size-12">
          <img src={Logo} alt="" />
        </div>
        {/* Menu bar */}
        <div className=" animate-bounce text-black bg-slate-300 rounded-lg  font-sans">
          <ul className=" flex  space-x-4  font-semibold  w-full p-2   capitalize ">
            <Link>Menu</Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
