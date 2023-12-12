import'./../Styles/Navbar.css'
import{useNavigate} from 'react-router-dom'
import Login from './Login';
function Navbar(){
    const router = useNavigate();
  return(
    <div className='nav-parent'>
        <div className='flex w-15'>
            <p onClick={ ()=>router('/')}>Home</p>
        </div>
       
        <div className='flex w-45'>
            <p>MAN</p>
            <p>WOMAN</p>
            <p>KIDS</p>
        </div>
        <div className='flex w-25'>
          <p onClick={ ()=>router('/Login')}>Login</p>
          <p onClick={ ()=>router('/Register')}>Register</p>
        </div>
    </div>
  )
}
export default Navbar;