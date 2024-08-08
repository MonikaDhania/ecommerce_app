import React from 'react';
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer, toast} from 'react-toastify'

const AddToCart = ({ addToCart }) => {
  const notify = ()=> toast('Item is Added To Cart!')
  return (
    <div className='bg-slate-700 text-white w-[150px] h-[40px]'>
      <button onClick={() => { addToCart(); notify(); }}>Add to Cart</button>
      <ToastContainer />
    </div>
  );
}

export default AddToCart;
