import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';


const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className=' h-[60px] w-screen flex flex-cols-6 justify-center text-xl font-bold pt-2 text-white gap-3 bg-slate-500'>
      <Link to='/'>HOME</Link>
      <Link to='/products'>PRODUCTS</Link>
      <Link to='/services'>SERVICES</Link>
      <Link to='/about'>ABOUT</Link>
      <Link to='/cart'>CART</Link>
      {user ? (
        <>
          <span>Welcome, {user}!</span>
          <button onClick={() => setUser('')} className='mb-6'>Logout</button>
        </>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </div>
  );
};

export default NavBar;
