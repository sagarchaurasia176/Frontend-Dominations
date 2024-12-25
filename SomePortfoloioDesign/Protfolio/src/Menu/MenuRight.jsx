import React from "react";
import { FaTimes } from "react-icons/fa"; // Importing close icon

// Menu right
const MenuRight = (props) => {
  // menuOpen={menuOpen} setOpen={setOpen}
  const CloseBars = () => {
    props.setOpen(false);
  };

  return (
    <div className=" w-1/3  h-full relative p-1">
      <div className=" flex justify-end  font-[u7] px-2 items-center relative">
        <div
          onClick={CloseBars}
          className=" text-white flex cursor-pointer items-center justify-center p-2 rounded-full transition-transform transform hover:scale-110"
        >
          <FaTimes className="text-white" /> {/* Adding close icon */}
        </div>
      </div>
    </div>
  );
};

export default MenuRight;
