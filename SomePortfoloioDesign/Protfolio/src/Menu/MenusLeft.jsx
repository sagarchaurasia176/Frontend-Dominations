import React from 'react';
import { Tilt } from '@jdion/tilt-react';

const MenusLeft = () => {
  return (
    <div className="cursor-pointer w-full sm:w-1/2 h-full py-4 px-6 sm:px-10 relative">
      <Tilt
        max={5}
        className="h-full w-full sm:h-1/3 sm:w-10 lg:w-full lg:h-full bg-cover bg-backImage relative rounded-lg shadow-lg"
      >
        {/* Uncomment the image code below to include your images */}
        {/* <img
          className="absolute scale-[0.94] opacity-50 h-full w-full object-cover object-center rounded-lg"
          src="https://your-image-url.com/image.jpg"
          alt="Description"
        />
        <img
          className="absolute scale-[0.91] opacity-70 h-full w-full object-cover object-center rounded-lg"
          src="https://your-image-url.com/image.jpg"
          alt="Description"
        />
        <img
          className="absolute scale-[0.88] opacity-60 h-full w-full object-cover object-center rounded-lg"
          src="https://your-image-url.com/image.jpg"
          alt="Description"
        /> */}
      </Tilt>
    </div>
  );
};

export default MenusLeft;
