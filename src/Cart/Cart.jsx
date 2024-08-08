// Cart.js
import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
