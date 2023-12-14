import { useEffect, useState } from "react";

function UseEffect4(){
    const[Counter,setCounter] = useState(1);
    const[Counter2,setCounter2] = useState(10);

    function Increment(){
        setCounter((prevState) => prevState + 1)

    }

    function Increment2(){
        setCounter2((prevState) => prevState + 1)
    }

    useEffect(()=>{
        alert("Hi from useEffect")
    },[Counter,Counter2])

return(
    <div>
        <h1>UseEffect4</h1>
        <h1>Counter:{Counter}</h1>
        <button onClick={Increment}>+</button>

        <h1>Counter2:{Counter2}</h1>
        <button onClick={Increment2}>+</button>
    </div>
 )
}
export default UseEffect4;