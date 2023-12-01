import React from 'react'
import {Link} from "react-router-dom";
import '../Component/Navbar1.css';
import { IoPersonCircle } from "react-icons/io5";
export default function Navbar1() {
  return (
    <div className='section'>
    <div className='navbar1'>
      <div className='right'>
      <ul>
        <li className='about'><Link to='about us' >About Us</Link></li>
        <li className='customer'><Link to='customer' >Customer Support</Link></li>
        </ul>
      </div>
      <div className='left'> 
        <ul>
        <li className='icon'><span className='ico'> <Link to='log' ><IoPersonCircle size='32'/></Link></span></li> 
        <li className='login'><span className='log'><Link to='login' >Log In</Link></span></li>
        </ul>
      </div>
    </div>
    </div>
  )
}
<div className='center'>
<div class="marquee-container">
<div class="marquee" id="text1"></div>
<div class="marquee2" id="text2">This is the second text marquee. </div>
</div>
</div>
