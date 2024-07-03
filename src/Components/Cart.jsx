import React from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { remove } from "../store/userSlice"
import product from "./Product"

const Cart = () => {
  const state = useSelector((state) => state.userSlice)
  const dispatch = useDispatch()
  const [cart, setCart] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  )

  const handleClose = (id) => {
    let cart = JSON.parse(localStorage.getItem("cartItems"))

    cart = cart.filter((item) => item.id !== id)
    setCart(cart)
    localStorage.setItem("cartItems", JSON.stringify(cart))
  }

  return (
    <>
      <div>
        <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
          <div className="container py-4">
            <div className="row justify-content-center">
              {cart.length === 0
                ? "Cart is empty"
                : cart.map((item, ind) => (
                    <>
                      <div className="row">
                        <button
                          onClick={() => handleClose(item.id)}
                          className="btn-close float-end"
                          arial-label="Close"
                        ></button>
                        <div className="col-md-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            height="200px"
                            width="180px"
                          />
                        </div>
                        <div className="col">
                          <>
                            <h3>{item.title}</h3>
                            <p className="lead fw-bold">$ {item.price}</p>
                          </>
                        </div>
                      </div>
                    </>
                  ))}
            </div>
            <div className="row">
              {cart.length !== 0 && (
                <NavLink
                  to="/checkout"
                  className="btn btn-outline-dark mb-5 w-25 mx-auto"
                >
                  Proceed To Checkout
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Cart
