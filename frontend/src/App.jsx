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
import Counter2 from './Components/06-12/Counter2';
import UseEffect from './Components/06-12/UseEffect';
import UseEffect2 from './Components/08-12/UseEffect2';
import UseEffect3 from './Components/08-12/UseEffect3';
import UseEffect4 from './Components/08-12/UseEffect4';
import DynamicRouting from './Components/08-12/DynamicRouting';
import UseParams from './Components/08-12/UseParams';
import PropsMaps from './Components/09-12/PropsMaps';
import { useState } from 'react';
import MapObject from './Components/09-12/MapObject';
import StyleComponents from './Components/09-12/StyleComponents';







function App() {

  const[MyName,setMyName] = useState("Awdiz")
  const[Students,setStudents] = useState([{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPO2-ecPWY1EcPN8Casm77mtR7qhUhIPK_4g&s" ,name:"sky",marks:"100"},{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPO2-ecPWY1EcPN8Casm77mtR7qhUhIPK_4g&s" ,name:"sky",marks:"100"},{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPO2-ecPWY1EcPN8Casm77mtR7qhUhIPK_4g&s" ,name:"sky",marks:"100"}])
  function ChangeName(){
    setMyName("Awdiz Institute.")
  }
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='*' element={<NoPageFound/>}/>
         <Route path='/' element={<Home/>}/>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/Register' element={<Register/>}/>
         <Route path='/Counter' element={<Counter/>}/>
         <Route path='/Counter2' element={<Counter2/>}/>
         <Route path='/useEffect' element={<UseEffect/>}/>
         <Route path='/useEffect2' element={<UseEffect2/>}/>
         <Route path='/useEffect3' element={<UseEffect3/>}/>
         <Route path='/useEffect4' element={<UseEffect4/>}/>
         <Route path='/dynamicRouting' element={<DynamicRouting/>}/>
         <Route path='/useParams/:age' element={<UseParams/>}/>
         <Route path='/PropsMaps' element={<PropsMaps kuchbhi={MyName} Myage="25" ChangName={ChangeName} MyStudents={["Akash","Sky","Sunny","Bobby"]}/>}/>
         <Route path='/MapObject' element={<MapObject MyStudentsData={Students}/>}/>
        <Route path='StyleComponents' element={<StyleComponents/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
