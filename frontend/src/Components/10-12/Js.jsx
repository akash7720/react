import React, { UseState } from 'react'

function js() {
    const[ShowText, setShowText] = UseState(false)
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

export default js;