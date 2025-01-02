import React from 'react'
import {Tilt} from '@jdion/tilt-react';


const MenusLeft = () => {
  return (
    <div className='w-2/3 cursor-pointer bg-white h-full py-14 px-40 relative '>
        <Tilt max={5}   className=' h-full  w-full bg-cover bg-backImage relative'>
            {/* Image */}
        {/* <img className=' absolute  scale-[0.94] opacity-50 h-full  max-w-fit   object-cover object-center' src="https://media.licdn.com/dms/image/v2/D5603AQFYZprW2GGwkw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716301434358?e=1740614400&v=beta&t=Qwt0_3FK4v5cMIgxuA4sA65s3_ayK2SDA-AiSM6uIio" alt="" /> */}
        {/* <img className=' absolute scale-[0.91] opacity-70 h-full  max-w-fit  object-cover object-center' src="https://media.licdn.com/dms/image/v2/D5603AQFYZprW2GGwkw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716301434358?e=1740614400&v=beta&t=Qwt0_3FK4v5cMIgxuA4sA65s3_ayK2SDA-AiSM6uIio" alt="" /> */}
        {/* <img className=' absolute scale-[0.88] opacity-60 h-full  max-w-fit  object-cover object-center' src="https://media.licdn.com/dms/image/v2/D5603AQFYZprW2GGwkw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716301434358?e=1740614400&v=beta&t=Qwt0_3FK4v5cMIgxuA4sA65s3_ayK2SDA-AiSM6uIio" alt="" /> */}
        </Tilt>
  
    </div>
  )
}

export default MenusLeft
