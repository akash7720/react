import { useEffect, useState } from "react";

function UseEffect3(){
    const[Counter,setCounter] = useState(1);
    const[Counter2,setCounter2] = useState(10);

    function Increment(){
        setCounter((prevState) => prevState + 1)

    }

    function Increment2(){
        setCounter2((prevState) => prevState + 1)
    }

    useEffect(()=>{
        alert("Hii from useEffect")
    },[Counter])
 
 return(
    <div>
        <h1>UseEffect3</h1>
        <h1>Counter:{Counter}</h1>
        <button onClick={Increment}>+</button>

        <h1>Counter2:{Counter2}</h1>
        <button onClick={Increment2}>+</button>
    </div>
 )
}
export default UseEffect3;


