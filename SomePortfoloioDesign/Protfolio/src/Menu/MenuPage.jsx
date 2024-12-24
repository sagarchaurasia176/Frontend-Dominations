import React from "react";
import MenusLeft from "./MenusLeft";
import MenuRight from "./MenuRight";

const MenuPage = () => {
  return (
    <div className="fixed h-screen w-full bg-slate-900 top-0 z-50">
      {/* menu left   */}
      {/* menu right */}
      <MenusLeft />
      <MenuRight />
    </div>
  );
};

export default MenuPage;
