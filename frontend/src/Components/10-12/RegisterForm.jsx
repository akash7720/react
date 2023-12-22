import React, { useState } from 'react'

const RegisterForm =()=> {
  const router = userNavigate();

  const[ userData,setUserData] = useState({name:"",email:"",password:"",ConfirmPassword:""})
  console.log(userData,"userData")

async function handleSubmit(e){
  e.preventDefault();

  if(userData.name && userData.email && userData.password && userData.ConfirmPassword){
      if(userData.password===userData.ConfirmPassword){
          try{
                // const response = await axios.post('http://localhost:8000/register',{userData})
               const response = {data:{success:true,message:"Registeration COMPpelted."}}

                 if(response.data.success===true){
                   alert(response.data.message)
                   setUserData({name:"",email:"",password:"",ConfirmPassword:""})
                   router('/login-form')
                 }
                  
          } catch (error){
            console.log(error)
            alert(error.response.data.message)
          }
        

      }else{
        alert("Password and Confirm password are not matched")
      }
    
  } else{  
          alert("All fields are required")
  }

}
function handleChange(e){
    // console.log(e.target.value,e.target.name)
    setUserData({...userData,[e.target.name]:e.target.value})
   }
 
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
         <label>Name:</label><br/>
         <input type='text' required onChange={handleChange} name="name" value={userData.name}/><br/>
         <label>Email:</label><br/>
         <input type='email' required  onChange={handleChange} name="email" value={userData.email}/><br/>
         <label>Password:</label><br/>
         <input type='password' required  onChange={handleChange} name="password" value={userData.password}/><br/>
         <label>Confirm  Password:</label><br/>
         <input type='password' required  onChange={handleChange} name="Confirmpassword" value={userData.ConfirmPassword}/><br/>
         <input type='submit' value="Register"/>
      </form>
    </div>
  )
}

export default RegisterForm