import React from 'react'
import LoadParent from '../components/Loader/LoadParent'

const AboutPage = ({homeRef}) => {
  return (
    <div ref={homeRef} className='  bg-slate-950 h-screen w-full p-2'>
      <LoadParent/>
        <h1>sagar</h1> 
      
    </div>
  )
}

export default AboutPage
