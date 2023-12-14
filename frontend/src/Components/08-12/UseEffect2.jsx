import { useEffect, useState } from "react";

function UseEffect2(){
   const[Counter,setCounter] = useState(1);

   function Increment(){
      setCounter((prevState) => prevState + 1)
   }

   useEffect(()=>{
      alert("Hi from UseEffect")
   },[])

 return(
    <div>
      <h1>UseEffect2</h1>
      <h1>Counter:{Counter}</h1>
      <button onClick={Increment}>+</button>
    </div>
 )
}
export default UseEffect2;