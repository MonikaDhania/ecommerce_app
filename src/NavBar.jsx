import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className='flex flex-cols-6 justify-center text-xl font-bold text-white gap-3 bg-slate-500 h-[80px] w-screen'>
      <Link to='/'>HOME</Link>
      <Link to='/products'>PRODUCTS</Link>
      <Link to='/services'>SERVICES</Link>
      <Link to='/about'>ABOUT</Link>
      <Link to='/cart'>CART</Link>
      {user ? (
        <>
          <span>Welcome, {user}!</span>
          <button onClick={() => setUser('')}>Logout</button>
        </>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </div>
  );
};

export default NavBar;
