import React from 'react';

const Cart = ({ cartItems }) => {
  if (!cartItems || cartItems.length === 0) {
    return <div className='bg-gray-100 p-4'><h2>Cart is empty</h2></div>;
  }

  return (
    <div className='bg-gray-100 p-4'>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
