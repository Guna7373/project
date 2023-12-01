import React from 'react'
import {Link} from "react-router-dom";
import '../Component/Navbar3.css';


export default function Navbar3() {
  return (
    <div className='navbar3'>
    <div className='deal'><Link to='deals' className='dl'>Deals</Link></div>
    <div className='twonav'>
      <ul>
        <li className='food'><Link to='food' className='d2'>Food</Link>
        <div className='dropdown-content1'>
                <ul>
                  <li><Link  to="Vegetables">Vegetables</Link></li>
                  <li><Link  to="Fruit">Fruit</Link></li>
                  <li><Link  to="Meat & Poultry">Meat & Poultry</Link></li>
                  <li><Link  to="Fish & Seafood">Fish & Seafood</Link></li>
                  <li><Link  to="Dairy & Eggs">Dairy & Eggs</Link></li>
                  <li><Link  to="Bakery">Bakery</Link></li>
                  <li><Link  to="Pastas & Grains">Pastas & Grains</Link></li>
                  <li><Link  to="Cereals & Sweets">Cereals & Sweets</Link></li>
                </ul>
            </div>
        </li>
        </ul>
        </div>
          <div className='threenav'>
      <ul>
        <li className='ages'><Link to='beverages' className='d3'>Beverages</Link>
        <div className='dropdown-content2'>
                <ul>
                  <li><Link  to="Tea">Tea</Link></li>
                  <li><Link  to="Coffee">Coffee</Link></li>
                  <li><Link  to="Soft Drinks">Soft Drinks</Link></li>
                  <li><Link  to="Beer">Beer</Link></li>
                  <li><Link  to="Wine">Wine</Link></li>
                </ul>
            </div>
        </li>
        </ul>
        </div>
        <div className='fournav'>
      <ul>
      <li className='hold'><Link to='household' className='d4'>Household</Link>
        <div className='dropdown-content3'>
                <ul>
                  <li><Link  to="Home & Kitchen">Home & Kitchen</Link></li>
                  <li><Link  to="Clean Supplies">Clean Supplies</Link></li>
                </ul>
            </div>
        </li>
        </ul>
        </div>
        <div className='fivenav'>
      <ul>
      <li className='care'><Link to='personalcare' className='d5'>Personal Care</Link>
        <div className='dropdown-content4'>
                <ul>
                  <li><Link  to="Personal Hygiene">Personal Hygiene</Link></li>
                  <li><Link  to="Babies">Babies</Link></li>
                </ul>
            </div>
        </li>
        </ul>
        </div>
        <li className='popular'><Link to='Popular' className='d6'>Most Popular</Link></li>
        <li className='orders'><Link to='Orders' className='d7'>My Orders</Link></li>
    </div>
  )
}
