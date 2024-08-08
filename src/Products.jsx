import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Products = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []); // The empty dependency array ensures this runs only once
  
  return (
    <div >
      <NavBar/>
      <div className='grid grid-cols-4  gap-4  '>
      {products.map((product) => (
        <Link to={'/products/'+product.id} className='flex flex-col border border-slate-800 items-center h-[300px] gap-2'>
          <img src={product.thumbnail} alt={product.title} className='w-32 h-[220px] object-cover' />
          <h2>{product.title}</h2>
          <p>$:{product.price}</p>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default Products;
