import React from 'react'

export default function Menu() {
  return (
    <>
    <div className='container'>
      <div className='title'>
        Pong Game
      </div>
      <div className='options'>
        <div class="list">
          <a href='javascript:;' className='option'>Player vs Player</a>
          <a href='computer' className='option'>Player vs Computer</a>
        </div>
      </div>
    </div>
    </>
  ) 
}
