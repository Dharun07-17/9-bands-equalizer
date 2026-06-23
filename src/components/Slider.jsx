import React from 'react'
import {useState} from 'react'
import "./Slider.css";
const Slider = ({label}) => {
  const [value, setValue] = useState(0);

  return (
 <div className="flex flex-col items-center justify-center h-full gap-6">
      
      {/* Value */}
      <span className="text-white text-xl font-bold mt-0.5 w-3 flex justify-center items-center">
        {value}
      </span>

      {/* Slider Area */}
      <div className="  h-62 flex items-center justify-center">
        <input
          type="range"
          min="-10"
          max="10"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="slider"
        />
      </div>

      {/* Label */}
      <span className="text-lg font-bold text-white">
        {label}
      </span>

    </div>
  )
}

export default Slider