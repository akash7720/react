import React, { useState } from 'react'

const CounterAA = () => {
  const[counter,setCounter]=useState(10)

  function Increment(){
    setCounter((prevState)=>prevState + 1)
  }
  function Decrement(){
    setCounter((prevState)=>prevState -1 )
  }
  return (
    <div>
      <h1>Counter-{counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>

    </div>
  )
}

export default CounterAA;