import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  const [cartLen, setCartLen] = useState(0)

  return (
    <div>
      <nav className="navbar navbar-expand-lg fw-bolder  navbar-light  py-3">
        <div className="container ">
          <ul className="navbar-nav display-5 mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="buttons">
            <Link to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i>Cart (
              {localStorage.getItem("cartItems")
                ? JSON.parse(localStorage.getItem("cartItems")).length
                : 0}
              )
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
