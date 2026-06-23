import React from 'react'
import Slider from './Slider'

const Srow = ({Srow}) => {
  return (
    <div className="grid justify-center-safe ">
 <div className="grid grid-cols-9 place-items-center gap-6">
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