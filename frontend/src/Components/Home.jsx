import { useContext } from "react";
import { MyContext } from "../Context/AuthContext";
import toast from "react-hot-toast";


function Home(){
  const {state, dispatch }= useContext(MyContext);
  return(
    <div>
      <h1>--HOME--</h1>
      <h1>Home Page-{state.user?.name}</h1>
      <button onClick={()=> toast.success("Success")}>Success</button> <br/>
      <button onClick={()=> toast.error("Error")}>Error</button>
    </div>
  )
}
export default Home;