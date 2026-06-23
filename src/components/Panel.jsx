import React from 'react'
import Slider from './Slider'
import Srow from './Srow'

const Panel = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
        <div className="flex flex-col gap-4">   
        <div className="  box-border w-[635px] h-[360px] bg-white/5 rounded-4xl shadow-[0_0_50px_rgba(0,0,0,0.45)] ">
      
       <Srow></Srow>
       

        </div>
        <div className="box-border w-[636px] h-[100px] bg-neutral-900/70 rounded-4xl shadow-[0_0_50px_rgba(0,0,0,0.35)] ">

        </div>
        </div>

    </div>
  )
}

export default Panel