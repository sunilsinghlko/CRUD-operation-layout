import React from 'react'
import './header.css'
function Header() {
  let h ={
    height : 85,
    width:85,
    marginLeft:20
    }
  return (
    <>
     
      <div className=' bg-dark p-2 mb-0 d-flex justify-content-between'>
      <img src='./image/navlogo.png' alt='..' style={h}/>
      <h2 className='pt-4 text-white fw-bold' style={{fontFamily:'poppins',paddingRight:25}}>CODING SCHOOL</h2>
      </div>
      
    </>
  )
}

export default Header
