import React, { useState } from 'react'

function js() {
    const[ShowText, setShowText] = useState(false)
    function Update(){
        setShowText(!ShowText)
    }
    
  return (
    <div>
        <button onClick={Update}>Toggel</button>
         {ShowText?<div>True</div> : <div>False</div>}
    </div>
  )
}

export default js