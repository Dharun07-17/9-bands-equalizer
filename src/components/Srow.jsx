import React from 'react'
import Slider from './Slider'

const Srow = ({Srow}) => {
  return (
    <div className="justify-center-safe flex items-center  ">
  <div className="flex flex-row gap-9">
    <Slider label="63" />
    <Slider label="125" />
    <Slider label="250" />
    <Slider label="500" />
    <Slider label="1k" />
    <Slider label="2k" />
    <Slider label="4k" />
    <Slider label="8k" />
    <Slider label="16k" />
  </div>
</div>
  )
}

export default Srow