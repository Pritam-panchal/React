import React,{ useState } from 'react';
import './App.css'; 
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const[alert,setAlert]=useState(null);
  function showAlert(message, type) {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  
  return (
    <>
    {/* <Router> */}
   <Navbar hom="Home"/><Alert alert={alert}  />
   <TextForm title="Enter something..." showAlert={showAlert}/>
   {/* <Routes>
          <Route path="/" element={}></Route>
          <Route path="/about" element={ <About/>}></Route>
        </Routes> 
   
    </Router> */}
    </>
  );
}


export default App;
