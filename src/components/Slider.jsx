import React from 'react'
import {useState} from 'react'
import "./Slider.css";
const Slider = ({label,className = ""}) => {
  const [value, setValue] = useState(0);

  return (
 <div className="flex flex-col items-center justify-center h-full gap-5  ${className}">
      
      
      <span className="text-white text-xl  mt-1 w-1  flex justify-center items-center">
        {value}
      </span>

     
      <div className="  h-61 flex items-center justify-center">
        <input
          type="range"
          min="-10"
          max="10"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="slider"
        />
      </div>

     
      <span className="text-lg w-9 text-white flex justify-center items-center">
        {label}
      </span>

    </div>
  )
}

export default Slider