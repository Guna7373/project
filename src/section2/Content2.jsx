import React from 'react'
import '../section2/Content2.css';
import { Link } from 'react-router-dom';
export default function Content2() {
  return (
    <div className='main'>
        <div className='data1'>
            <div className='img'></div>
            <div className='card'>
                <h3>Free Delivery</h3>
                <p className='p'>To Your Door</p>
            </div>
            <div className='sec1'></div>
            <div className='img1'></div>
            <div className='card2'>
                <h3>Local Pickup</h3>
                <p className='p1'>Check Out < Link to="Location">Locations</Link> </p>
            </div>
            <div className='sec2'></div>
            <div className='img2'></div>
            <div className='card3'>
                <h3>Available for You</h3>
                <p className='p2'>< Link to="Online Support">Online Support</Link> 24/7 </p>
            </div>
            <div className='sec3'></div>
            <div className='img3'></div>
            <div className='card4'>
                <h3>Order on the Go</h3>
                <p className='p3'>< Link to="Download">Download</Link> Our App </p>
            </div>
        </div>
    </div>
  )
}
