import React from 'react'
import Header from './components/Navabar/Header'
const Home = (props) => {
  return (
    <div>
         {/* header */}
         <div className="h-screen w-full bg-backgroundImage">
          <Header menuOpen={props.menuOpen} setOpen={props.setOpen} />
        </div>
    </div>
  )
}

export default Home
