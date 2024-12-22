import React from "react";
import Logo from "../../log/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Import FontAwesome icon

const Header = () => {
  return (
    <div>
      <nav className=" flex w-full  justify-between px-6  items-center">
        <NavLink to="/">
          <div className="size-12 cursor-pointer ">
            <img src={Logo} alt="" />
          </div>
        </NavLink>
        {/* Menu bar */}
        <div className=" text-black rounded-lg  font-sans">
          <NavLink to="/menu/page" className="cursor-pointer ">
            <h3 className=" text-black bg-orange-600  rounded-b-xl font-[u8]  w-full p-2   capitalize flex items-center cursor-pointer">
              <FaBars className="mr-2" /> {/* Add icon here */}
              Menu
            </h3>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
