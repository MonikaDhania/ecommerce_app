import React from 'react';
import useCounter from './useCounter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToCart = ({ addToCart }) => {
  const notify = () => toast("Item added to cart!", { position: toast.POSITION.TOP_CENTER });

  return (
    <div className='bg-slate-700 text-white w-[150px] h-[40px]'>
      <button onClick={() => { addToCart(); notify(); }}>Add to Cart</button>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default AddToCart;
