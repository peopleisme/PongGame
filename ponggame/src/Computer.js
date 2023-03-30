import React, { useState, useEffect } from 'react'
import Board from './Board'
export default function Computer() {

  const [MousePosition,setMousePosition] = useState({x:0,y:0})
  useEffect(() => {
     const handleMouseMove = (event) => {
         setMousePosition({ x: event.clientX, y: event.clientY });
     };
 
     window.addEventListener('mousemove', handleMouseMove);



     return () => {
       window.removeEventListener(
         'mousemove',
         handleMouseMove
       );
     };
     
   }, []);
   let center
   if(MousePosition.x <= 150) center = 0
   else if(MousePosition.x >= window.innerWidth-150 ) center = window.innerWidth - 300
   else center = MousePosition.x - 150

 
   

  return (
    <>
    
    <div className='Computer container'>
      <div className="myPlatform" style={{ left: center + "px"}}>  </div>
    </div>
    </>
  )
}