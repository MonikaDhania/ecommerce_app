import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex flex-cols-6 justify-center text-xl font-bold text-white gap-3 bg-slate-500 h-[80px] w-screen'>
      <Link to='/home' >HOME</Link>
      <Link to='/about' >ABOUT</Link>
      <Link to='/products' >PRODUCTS</Link>
      <Link to='/services' >SERVICES</Link>
      <Link to='/cart' >CART</Link>
      <Link to='/login' >LOGIN</Link>
    </div>
  )
}

export default NavBar
