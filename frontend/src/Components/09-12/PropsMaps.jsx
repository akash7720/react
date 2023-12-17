
import React from 'react'

const PropsMaps =({kuchbhi,MyAge,ChangName,MyStudents})=> {
  // const{kuchbhi} = props; 
  console.log(kuchbhi,MyAge,MyStudents,"kuchbhi")
  
  return (
    <div>
      <ul>
      {MyStudents.map((Student)=>(
        <li>
             {Student}
        </li>
        ))}
      </ul>
      <h1>{kuchbhi}</h1>
      <button onClick={ChangName}>Change Name</button>
    </div>
  )
}

export default PropsMaps