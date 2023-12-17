import React from 'react'

const MapObject = ({MyStudentsData}) => {
  console.log(MyStudentsData,"MyStudentsData")
  return (
    <div>
       {MyStudentsData.map((StudentsData)=>(
        <div>
          <img src={StudentsData.image}/>
          <h1>{StudentsData.name}</h1>
          <p>{StudentsData.marks}</p>
        </div>
       ))}
    </div>
  )
}

export default MapObject
