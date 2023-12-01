import React from 'react'
import {Link} from "react-router-dom";
import '../Component/Navbar2.css';
import * as Icon from "react-bootstrap-icons";
import { BsGeoAltFill } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
export default function Navbar2() {
  return (
    <div className='navbar2'>
    <div className='clovers'><span className='clo'><Link to='clovers' >Clovers.</Link></span></div>
    <div className='aaa'>
    <input type='text' placeholder='   Search a product e.g.milk' name='search' className='search1'></input>
    <button type='submit' className='button1'><Icon.Search size={15}></Icon.Search></button>  
    </div>
    <div>
    <div className='map'><Link to='map' className='geo' ><BsGeoAltFill  size="26"/></Link></div>
    <div className='heart'><Link to='hrt' className='hrt' ><BsHeartFill size="26"/></Link></div>
    <div className='shop'> <Link to='shop' className='shp' ><BsCart2 size="26"/></Link></div>
    <div className='one'><Link to='on' className='on' >1</Link></div>
    </div>
  </div>
  )
}
