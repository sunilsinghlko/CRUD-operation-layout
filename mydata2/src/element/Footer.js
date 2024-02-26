import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
function Footer() {
  return (
    <>
      <div className='bg-dark text-white text-center p-3 d-flex justify-content-evenly'> 
      <div>
        <h6>Connect with Us</h6>
        <div className='d-flex justify-content-evenly' >
       <IoLogoFacebook/>
       <FaSquareWhatsapp/>
       <GrInstagram/>
        </div><br/>
        <div>
        <h6>Follow us</h6>
        <IoLogoYoutube/>
        </div>

      </div>
      
      <div>
      <ul className="list-group bg-dark text-white" style={{listStyle:'none',fontSize:13}}>
  <li><b>Chosse What you want</b></li>
  <li>A second item</li>
  <li>A third item</li>
  <li>A fourth item</li>
  <li>And a fifth one</li>
  <li>An item</li>
  <li>A second item</li>
  <li>A third item</li>
</ul>
</div>
<div>
<ul className="list-group bg-dark text-white" style={{listStyle:'none',fontSize:13}}>
  <li><b>Our Program</b></li>
  <li>A second item</li>
  <li>A third item</li>
  <li>A fourth item</li>
  <li>And a fifth one</li>
  <li>An item</li>
 
</ul>  
</div>
<div>
<ul className="list-group bg-dark text-white" style={{listStyle:'none',fontSize:13}}>
  <li><b>Join Us</b></li>
  <li>A second item</li>
  <li>A third item</li>
  <li>A fourth item</li>
  <li>And a fifth one</li>
  
</ul>  
</div>
      </div>
    </>
  )
}

export default Footer
