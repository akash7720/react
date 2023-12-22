import React, { useState } from 'react'

function LoginForm() {
    const[LoginData,setLoginData]= useState({email:"",password:""})
    
    function handleChange(e){
        console.log(e.target.value)
        setLoginData({ ...LoginData, [e.target.name] :e.target.value})
       }
     
  return (
    <div>
        <h1>LoginForm</h1>
        <form>
        <label>Email:</label><br/>
         <input type='email' required onChange={handleChange} name='email'/><br/>
         <label>Password:</label><br/>
         <input type='password' required  onChange={handleChange} name='password'/><br/>
         <input type='submit' value='Login'/><br/>
        </form>

    </div>
  )
}

export default LoginForm 