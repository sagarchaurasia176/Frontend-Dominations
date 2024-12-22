import React from "react";

const ContentHeader = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <code className=" text-white text-2xs">Hello World ! My name is</code>
      </div>

      <div className=" flex justify-center">
        <h1 className="  text-center font-extrabold text-slate-100">
          Sagar &nbsp;
        </h1>
        <h2 className=" text-center  text-yellow-400 ">Chaurasia</h2>
      </div>
    </div>
  );
};

export default ContentHeader;
