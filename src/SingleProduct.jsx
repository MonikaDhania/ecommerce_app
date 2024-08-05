// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import AddToCart from './AddToCart';
// import Cart from './cart/Cart'; // Correct path to Cart

// const SingleProduct = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState({});
//   const [cartItems, setCartItems] = useState([]); // Initialize as an empty array

//   useEffect(() => {
//     fetch(`https://dummyjson.com/products/${productId}`)
//       .then((response) => response.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.log(err));
//   }, [productId]);

//   const addToCart = () => {
//     const productInCart = cartItems.find(item => item.id === product.id);
//     if (productInCart) {
//       setCartItems(cartItems.map(item =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       ));
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   return (
//     <div>
//       <img src={product.thumbnail} alt={product.title} />
//       <p>{product.title}</p>
//       <p>{product.price}</p>
//       <p>{product.description}</p>
//       {/* <AddToCart addToCart={addToCart} /> */}
//       <Cart cartItems={cartItems} />
//     </div>
//   );
// };

// export default SingleProduct;


import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const SingleProduct = () => {
  const [products, setProducts] = useState("");
  const [cart, cartItems] = useState();
  const {id} = useParams();

  useEffect(()=> {
    fetch(`https://dummyjson.com/products/${id}`)
    .then((response) => response.json())
    .then((data)=> setProducts(data))
    .catch((err)=> console.log(err))
  },[id])



  return (
    <div>
      <img src={products.thumbnail} alt="" />
      <p>{products.title}</p>
      <p>{products.price}</p>
      <p>{products.description}</p>
    </div>
  )
}

export default SingleProduct;
