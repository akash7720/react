import { useState } from "react";

function Counter(){
    const[Counter, setCounter] = useState(1)
    console.log(Counter ,"-Counter")

    function increment(){
       setCounter((prevValue) => prevValue + 1)
    }
    function Decrement(){
      setCounter((prevValue) => prevValue -1)
    }
    function test(){
       setCounter(Counter +1 )
    }
    function IncrementBy2(){
      setCounter((prevValue) => prevValue +2)
    }
    
  return(
    <div>
        <h1>Counter -{Counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={test}>+</button>
        <button onClick={IncrementBy2}>+2</button>
        
    </div>
  )
} 
export default Counter;