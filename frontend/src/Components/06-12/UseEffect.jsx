import { useEffect, useState } from "react";


function UseEffect(){
  const [Counter,setCounter] = useState(0);
  const[Counter2,setCounter2]= useState(10)

 function Increment(){
  setCounter((prevState) => prevState + 1)
 }
function Increment2(){
  setCounter2((prevState) => prevState + 1)
} 

  useEffect(()=>{
    alert("Hi form UseEffect.")
    console.log("Hii")
 });

  return(
    <div>
        <h1>UseEffect </h1>
        <h1>Counter:{Counter}</h1>
        <button onClick={Increment}>+</button>

        <h1>Counter2:{Counter2}</h1>
        <button onClick={Increment2}>+</button>
    </div>
  )
}
export default UseEffect;