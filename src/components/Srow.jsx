import React from 'react'
import Slider from './Slider'

const Srow = ({eq, setEq}) => {
  const frequencies = [63, 125, 250, 500, 1000, 2000, 4000, 8000, 16000];
  return (
<div className="flex flex-row gap-8 justify-center items-center">
  {frequencies.map(freq => (
    <Slider
      key={freq}
      label={freq >= 1000 ? `${freq / 1000}k` : `${freq}`}
      value={eq?.[freq] ?? 0}
      onChange={(value) =>
        setEq(prev => ({
          ...prev,
          [freq]: value,
        }))
      }
    />
  ))}
</div>
  )
}

export default Srow