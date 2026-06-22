import React from 'react'
import {useState} from 'react'

const Slider = ({label}) => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-full">
<span className='text-white '>{value}</span>
<div className="flex items-center justify center">
    
    <input
      type="range"
      min="-10"
      max="10"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      className="cursor-pointer rotate-[-90deg] w-70 h-0.5"
    />

</div>
<span className="text-lg font-bold text-blue-50">{label}</span>
    </div>
  )
}

export default Slider