import React from 'react'
import "./Cart.css"
import { useSelector } from 'react-redux';
import CartCard from '../../components/nav/CartCard/CartCard';
import ec from "../../assets/emptycart.png"
function Cart () {
  let items=useSelector(state=>state)
  let total=items.cart.reduce((a,b)=>a+b.price,0)
  return (
    <div className='cart'>
      {items.cart.length<=0?<div className='empty-cart'>
        <img src={ec} alt="" />
        <h1>Cart is empty</h1>
      </div>:
      <div className='cartCard-section'>
        {items.cart.map((item) => (
          <CartCard name={item.name} price={item.price}
           image={item.image} id={item.id}/>
        ))}
        <div className="price-section">
          <span>Total Products : {items.cart.length}</span>
          <span>Total Price:{total}</span>
        
        </div>
      </div>

      


}
    </div>
  )
}

export default Cart