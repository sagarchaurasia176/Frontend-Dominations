import React from "react";
import Logo from "../../log/Logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Import FontAwesome icon

const Header = (props) => {
  const Menu = () => {
    props.setOpen(true); // Ensure setOpen is passed as a prop
  };

  return (
    <div>
      <nav className="flex w-full p-2 justify-between text-white px-6 items-center">
        <div className="size-12 cursor-pointer">
          <Link to="/" className="cursor-pointer">
            <img src={Logo} alt="" />
          </Link>
        </div>
        {/* Menu bar */}
        <button
          onClick={Menu}
          className="cursor-pointer flex items-center bg-orange-200 p-2 rounded-r-lg font-[u7] text-black rounded-lg"
        >
          <FaBars className="mr-2 cursor-pointer" /> {/* Add icon here */}
          Menu
        </button>
      </nav>
    </div>
  );
};

export default Header;
