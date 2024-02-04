import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'

const RegisterTodos = () => {
    const [UserData, setUserData] = useState({Name:"",Email:"",Password:"",confirmPassword:""})
   console.log(UserData,"UserData")
   const router = useNavigate()
   function handleSubmit(e){
    e.preventDefault()
      
    if (UserData.Name,UserData.Email,UserData.Password,UserData.confirmPassword) {
       
      try {
        // const response = await axios.post('http://localhost:800/login',{UserData})
        const response ={data:{success:true, message:"Register successfull"}}
        if (response.data.success){
          alert(response.data.message)
          setUserData({Name:"",Email:"",Password:"",confirmPassword:""})
        }
      } catch (error) {
        console.log(error)
        alert(error.response.data.error)
        router('/LoginTodos')
      }
    } else {
      alert("All Feields are madatory..")
    }
   }
    
   function handleChange(e){
    setUserData({...UserData, [e.target.name]: e.target.value });
   }
  return (
    <div>
        <h1>RegisterTodos</h1>
        <form onSubmit={handleSubmit}>
            <lable>Name</lable><br/>
            <input type='text' onChange={handleChange} name="Name" required value={UserData.Name} ></input><br/>
            <lable>Email</lable><br/>
            <input type='Email' onChange={handleChange} name="Email" required  value={UserData.Email} ></input><br/>
            <lable>Password</lable><br/>
            <input type='Password' onChange={handleChange} name='Password' required value={UserData.Password}  ></input><br/>
            <lable>confirmPassword</lable><br/>
            <input type='Password' onChange={handleChange} name='confirmPassword' required value={UserData.confirmPassword}  ></input><br/>
            <input type='submit' value="Register" />
        </form>
    </div>
  )
}

export default RegisterTodos;