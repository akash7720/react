import { useState } from "react";

function Counter2(){
   const[Counter,setCounter] = useState(100)
   console.log(Counter,"-Counter")

   function increment(){
      setCounter((prevState) => prevState + 1)
   }
   function Decrement(){
      setCounter((prevState) => prevState - 1)
   }
   function reset(){
      setCounter(100)
   }
  return(
     <div>
        <h1>Conuter -{Counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={reset}>Reset</button>
     </div>
  )
}
export default Counter2;