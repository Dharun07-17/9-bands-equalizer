import React from 'react'
import Slider from './Slider'

const Panel = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  ">
        <div className="flex flex-col gap-4">   
        <div className="box-border w-[540px] h-[360px] bg-neutral-800 rounded-4xl ">
        <Slider />

        </div>
        <div className="box-border w-[540px] h-[100px] bg-neutral-800 rounded-4xl">

        </div>
        </div>

    </div>
  )
}

export default Panel