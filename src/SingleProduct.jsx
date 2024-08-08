import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cart from './Cart/Cart';
import AddToCart from './Cart/AddToCart';
import { useCart } from './Cart/CartContext';

const SingleProduct = () => {
  const [products, setProducts] = useState({});
 const {addToCart} = useCart();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [id]);

  
  return (
    <div>
      <img src={products.thumbnail} alt="" />
      <p>{products.title}</p>
      <p>{products.price}</p>
      <p>{products.description}</p>
      <AddToCart addToCart={() => addToCart(products)} />

      
    </div>
  );
}

export default SingleProduct;
