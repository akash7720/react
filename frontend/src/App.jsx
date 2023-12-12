import logo from './logo.svg';
import './App.css';
import{ Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import NoPageFound from './Components/NoPageFound';
import Navbar from './Components/Navbar';
import Footer from './Components/footer';
import Counter from './Components/Counter';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='*' element={<NoPageFound/>}/>
         <Route path='/' element={<Home/>}/>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/Register' element={<Register/>}/>
         <Route path='/Counter' element={<Counter/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
