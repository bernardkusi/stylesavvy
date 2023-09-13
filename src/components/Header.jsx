import React, { useContext } from 'react'
import { Link, NavLink } from "react-router-dom";
import { Context } from '../context/Appcontext';

const Header = () => {
  const { cart, info ,user } = useContext(Context);
  return (
    <nav>
      <Link to='/' className="logo">StyleSavvy</Link>

      <ul style={{ alignItems: "center" }}>
        <Link to='/cart' style={{ fontSize: "1.1rem" }}> <i className="fa-solid fa-cart-shopping"><sup>{cart.length}</sup></i></Link>
        {user ? <Link to='/cart' style={{ fontSize: "1.1rem" }}> <i className="fa-solid fa-user"></i></Link>
        : <Link to='/signin' style={{ fontSize: "1.1rem" }}> <i className="fa-solid fa-right-to-bracket"></i></Link>}
        <span><i class="fa-solid fa-bars"></i></span>
      </ul>
      <ul className='links'>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          About
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          products
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          Contact
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          Blog
        </NavLink>
      </ul>

      {info && (<div className="info">
        <p className="infotext">
          {info}
        </p>
      </div>)}
    </nav>
  )
}

export default Header