import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

const LoginTodos = () => {

  const [LoginData, setLoginData] =useState({email:"",password:""})
  console.log(LoginData,"LoginData")
const router = useNavigate()

  async function handalSubmit(e){
    e.preventDefault()
    if (LoginData.email,LoginData.password) {
       
      try {
        // const response = await axios.post('http://localhost:800/login',{LoginData})
        const response ={data:{success:true, message:"Login successfull"}}
        if (response.data.success){
          alert(response.data.message)
          setLoginData({email:"",password:""})
        }
      } catch (error) {
        console.log(error)
        alert(error.response.data.error)
        router('/AddTodos')
      }
    } else {
      alert("All Feields are madatory..")
    }
  
  }

  function handleChange(e){
    setLoginData({...LoginData, [e.target.name]: e.target.value });
  }
    return (
    <div>
      <h1>LoginTodos</h1><br/>
      <form onSubmit={handalSubmit}>
      <label>Email</label><br/>
      <input type="email" onChange={handleChange} name='email' value={LoginData.email} required/><br/>
      <label>Password</label><br/>
      <input type="password" onChange={handleChange} name='password' value={LoginData.password} required /><br/>
      <input type='submit' value='Login'></input>
      </form>
    </div>
  )
}

export default LoginTodos