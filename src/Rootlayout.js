import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar1 from './Component/Navbar1'
import Navbar2 from './Component/Navbar2'
import Navbar3 from './Component/Navbar3'
import Content1 from './section1/Content1'
import Content2 from './section2/Content2'
import Content3 from './section3/Content3'



export default function Rootlayout() {
  return (
    <div>
        <Navbar1/>
        <Navbar2/>
        <Navbar3/>
        <Content1/>
        <Content2/>
        <Content3/>
        <Outlet/>
    </div>
  )
}
