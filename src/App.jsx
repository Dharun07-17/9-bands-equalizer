import React from 'react'
import Panel from './components/Panel'
import { useState } from 'react';

const App = () => {
  const [eq, setEq] = useState({
  63: 0,
  125: 0,
  250: 0,
  500: 0,
  1000: 0,
  2000: 0,
  4000: 0,
  8000: 0,
  16000: 0,
});

  return (
    <div className="min-h-screen bg-black/25" >
    
     <Panel
  eq={eq}
  setEq={setEq}
/>
  
    </div>
  )
}

export default App;