import { useState } from "react";

function Counter(){
    const[Counter, setCounter] = useState(1)
    console.log(Counter ,"-Counter")
    function increment(){
       setCounter((prevValue) => prevValue +1)
    }
    function Decrement(){
      setCounter((Awdiz) => Awdiz -1)
    }
  return(
    <div>
        <h1>Counter -{Counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={Decrement}>-</button>
        
    </div>
  )
} 
export default Counter;