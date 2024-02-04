import React, { useState } from 'react'

const AddTodos = () => {
  const [Todo , setTodo] = useState("")

  const [Items,setItems] = useState([])

 const ItemsTodo = (e) => {
      setTodo(e.target.value)
 }
 const ListofTodo =()=>{
  setItems((oldItems)=>{
    return[...oldItems,Todo];
  });
  

 }
 
  return (
    <div>
      <h2>AddTodos</h2>
      <input type='text' placeholder='Add Todo' onChange={ItemsTodo} ></input>
      <button onClick={ListofTodo} >+</button>
      <ol>
        {/* <li>{Todo}</li> */}

        {Items.map((itemsvalue) => {
           return <li>{itemsvalue}</li>      
             })}
      </ol>
    </div>
  )
}

export default AddTodos



