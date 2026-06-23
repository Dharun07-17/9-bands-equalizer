import React from 'react'
import Slider from './Slider'
import Srow from './Srow'

const Panel = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
        <div className="flex flex-col gap-4">   
        <div className="  box-border w-[635px] h-[358px] rounded-4xl bg-white/0 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.30)] ">
      
       <Srow></Srow>
       

        </div>
        <div className="box-border w-[635px] h-[100px] bg-neutral-800 rounded-4xl">

        </div>
        </div>

    </div>
  )
}

export default Panel