import { useState } from "react";    //rafce
import { useNavigate } from "react-router-dom"

function DynamicRouting(){
    const router = useNavigate();
    const[myage,setmyage] = useState(23)
    return(
      <div>
          <h1>DynamicRouting</h1>
          <button onClick={ ()=> router(`/useParams/${myage}`)}>Routing</button>
      </div>
    )
  }
  export default DynamicRouting

  