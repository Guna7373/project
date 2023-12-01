import React from 'react'
import '../section3/Content3.css';
import Card from 'react-bootstrap/Card';
 import Button from 'react-bootstrap/Button';

export default function() {
  return (
    <div className='bgcard'>
        <div className='bd'>Best Deals</div>
    <div>
    <Card className='card1'>
     <Card.Text className='item1'>Best Deal</Card.Text>
    <Card.Img className='imgc1' variant="top" src="holder.js/100px180" />
    <Card.Body className='cb1'>
      <Card.Title className='ct1'>Hand Cream</Card.Title>
      <Card.Text1 className='ctxt1'>$2.99</Card.Text1>
      <Card.Text2 className='ctxt2'>$2.99</Card.Text2>
      <Button variant="primary" className='cbutton1'>Add to Cart</Button> 
    </Card.Body>
  </Card>
    </div>
    </div>
  )
}
