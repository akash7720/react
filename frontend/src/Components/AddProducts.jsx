import React, { useState } from 'react'
import toast from "react-hot-toast";
import api from './Halper/AxiosConfig';


const AddProducts = () => {
  const[producteData,setproducteData] = useState({Name:"",Price:"",Image:"",Category:"",Quantity:""})

  function handalChange(e){
    setproducteData({...producteData, [e.target.name]: e.target.value })}
  
  async function handleSubmit(e){
    e.preventDefault()
    if(producteData.Name && producteData.Price && producteData.Image && producteData.Category && producteData.Quantity ){
      
      try{
        const response = await api.post('/Product/addProduct',{producteData})
          if(response?.data.success){
             toast.success(response.data.messgae)
             setproducteData({Name:"",Price:"",Image:"",Category:"",Quantity:""})
          }
      }catch (error){
        toast.error(error.response.Data.error)
      }
    }else{
       toast.error("All Fildes are Requared")
    }
}
  return (
    <div>
      <h1>AddProducts</h1><br/>
      <form  onSubmit={handleSubmit}> 
      <label>Name:</label><br/>
      <input type='text' onChange={handalChange} value={producteData.Name} name='Name' ></input><br/>
      <label>Prise:</label><br/>
      <input type='number'  onChange={handalChange}   value={producteData.Price} name='Price'></input><br/>
      <label>Image:</label><br/>
      <input type='url'  onChange={handalChange}  value={producteData.Image} name='Image' ></input><br/>
      <label>Category:</label><br/>
      <input type='text'  onChange={handalChange}  value={producteData.Category} name='Category' ></input><br/>
      <label>Quantity:</label><br/>
      <input type='number'  onChange={handalChange}  value={producteData.Quantity}  name='Quantity'  ></input><br/>
      <input type='submit' value="Add Products"></input><br/><br/>
      </form>

    </div>
  )
  }

export default AddProducts;