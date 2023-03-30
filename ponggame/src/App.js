import React,{useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Menu'
import Computer from './Computer';
import Player from './Player';

function App() {
  const [backendResponse,setBackendResponse] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        console.log(data)
        setBackendResponse(data)
      }
    )
  },[])

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Menu />}></Route>
    <Route path="/computer" element={<Computer /> }></Route>
    <Route path="/player" element={<Player /> }></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
