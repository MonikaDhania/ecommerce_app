// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const CategoryProducts = () => {
//   const { category } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://dummyjson.com/products/category/${category}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // console.log('Fetched products:', data); // Inspect the fetched data
//         setProducts(data.products); // Ensure it's an array
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, [category]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Products in {category}</h1>
//       <div>
//         {products.length > 0 ? (
//           products.map(product => (
//             <div key={product.id}>
//               <h3>{product.title}</h3>
//               <p>{product.description}</p>
//             </div>
//           ))
//         ) : (
//           <p>No products found in this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryProducts;
