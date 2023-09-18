import logo from './logo.svg';
import './App.css';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
const[Mode,setMode]=useState("light");
const[alert,setAlert]=useState(null);
const[textCl,setTextCl]=useState("dark");
const[darkLight,setdarklight]=useState("Dark");

function showAlert(msg, typ){
  setAlert({
    msg: msg,
    type: typ
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}
function togelMode() {
  if(Mode=="dark"){
    setMode("light");
    setTextCl("dark");
    setdarklight("Dark");
    document.body.style.backgroundColor="white";
    showAlert("Light Mode has been Enabled.","dark")
  }else{
    setdarklight("Light");
    setMode("dark");
    setTextCl("white");
    document.body.style.backgroundColor="black";
    showAlert("Dark Mode has been Enabled.","light")
  }
}
  return (
   <>
   <h1>Pritam</h1>
   <Navbar Mode={Mode} togelMode={togelMode} xdarkLight={darkLight} textClr={textCl}/>
   <Alert alert={alert}/>
   <TextForm heading="Try TextUtils - For Modify Your Text" textClr={textCl} showAlert={showAlert}   Mode={Mode}/>

   </>
  );
}

export default App;
