import React, { useState } from 'react'

const UseCallback = () => {
    const[counter,setCounter] = useState(0)
    const[todos,setTodos] = useState([])
   
    function AddTodo(){
        setTodos((todo)=>[...todo,"New todo"])
    }
  return (
    <div>
        <div>
                <h1>Counter : {counter}</h1>
                <button onClick={() => setCounter((c) => c + 1)}>+</button>
            </div>
    </div>
  )
}

export default UseCallback