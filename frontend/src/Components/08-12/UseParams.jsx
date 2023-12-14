import { useParams } from "react-router-dom"

function UseParams(){
    const{age} = useParams()
  return(
    <div>UseParams -{age}</div>
  )
}
export default UseParams;