import React from 'react'
import ReactDom from 'react-dom'
import { Routes , Route } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Products from './Products'
import Services from './Services'
import Cart from './Cart'
import SingleProduct from './SingleProduct'
// import CategoryProducts from './CategoryProducts'
const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path='/products/:id' element={<SingleProduct/>} />
          {/* <Route path='/products/:Categories' element={<CategoryProducts/>} /> */}
          <Route path="/services" element={<Services/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
