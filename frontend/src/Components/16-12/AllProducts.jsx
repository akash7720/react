
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'

const AllProducts = () => {

    const[products,setProducts] = useState([]);
    
    const router = useNavigate();
    async function getData(){
        try{
             const response = await axios.get('https://fakestoreapi.com/products')
            //  console.log(response.data,"response.data")
            setProducts(response.data)
        }catch(error){
            console.log(error)
        }
    }

    function Routing(id){
    
    router(`/SingleProducts/${id}`);

    }
    useEffect(()=>{
        // alert("component rendered on browser...")
        toast.success("Hi from todos..")
        getData();
    },[])

    

  return (
    <div>
        {products?.length? <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
            {products.map((products)=>(
                <div onClick={()=> Routing(products.id)} style={{height:'500px', width:'23%' , border:'2px solid black', marginBottom: '30px', cursor: 'pointer'}}>
                    <img style={{ height: "250px",width:'60%', margin: 'auto' }}  src={products.image}/>
                    <h3>{products.title}</h3>
                    <h3>${products.price}/-</h3>
                    
                </div>
            ))}
        </div> : <div>Loading..</div>}
    </div>
  )
}

export default AllProducts