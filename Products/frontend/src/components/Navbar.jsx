import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>E-Commerce App</h1>
        <div className="list">
            <Link to="/products">Products</Link>
            <Link to="/mycart" >My Cart</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
