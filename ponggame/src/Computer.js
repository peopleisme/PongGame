import React, { useState, useEffect } from 'react'
import Board from './Board'
export default function Computer() {

  const [MousePosition,setMousePosition] = useState({x:0,y:0})
  const [BallPosition,setBallPosition] = useState({x:20,y:0})
  useEffect(() => {
     const handleMouseMove = (event) => {
         setMousePosition({ x: event.clientX, y: event.clientY });
     };
 
     window.addEventListener('mousemove', handleMouseMove);

     new Ball(window.innerWidth/2,window.innerHeight/2,{x:-9,y:-5})

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

   class Ball{
    constructor(x,y,speedvector){
      this.X = x;
      this.Y = y;
      this.vectorX = speedvector.x;
      this.vectorY = speedvector.y;
      setBallPosition({x:this.X,y:this.Y})
      this.time = Date.now()
      this.draw()
    }
    draw(){
      
      setTimeout(() => {
        let ctime = Date.now()  
        let diffx = this.X + ((ctime - this.time)/100) * this.vectorX
        if(this.X - diffx>1) console.log(this.X +10 < this.X + ((ctime - this.time)/100) * this.vectorX)
        this.X = this.X + ((ctime - this.time)/100) * this.vectorX
        this.Y = this.Y + ((ctime - this.time)/100) * this.vectorY
        setBallPosition({x:this.X, y:this.Y})
       
        this.time = Date.now() 
        
        this.draw()
      }, 16);
      
    }
   }

   

  return (
    <>
    
    <div className='Computer container'>
      <div className="ball" style={{ left: BallPosition.x + "px" ,bottom:BallPosition.y+ "px"}}>  </div>
      <div className="myPlatform" style={{ left: center + "px"}}>  </div>
    </div>
    </>
  )
}