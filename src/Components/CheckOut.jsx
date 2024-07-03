import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import product from "./Product"
import Cart from "./Cart"

var total = 0
const CheckOut = () => {
  const state = useSelector((state) => state.userSlice)
  const dispatch = useDispatch()
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
  )

  // const  = () => {
  //   total = total + item.price
  //   return (
  //     <li className="list-group-item d-flex justify-content-between lh-sm">
  //       <div className="">
  //         <h6 className="my-0">{product.title}</h6>
  //       </div>
  //       <span className="text-muted">${product.price}</span>
  //   )
  // }
  return (
    <>
      <div className="container my-5" key={product.id}>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your Cart</span>
              <span className="badge bg-primary rounded-pill">
                {localStorage.getItem("cartItems")
                  ? JSON.parse(localStorage.getItem("cartItems")).length
                  : 0}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {cart.map((item) => (
                <>
                  <>
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 className="w-75 ">{item.title}</h6>
                      </div>
                      <span className="text-muted w-25">$ {item.price}</span>
                    </li>
                  </>
                </>
              ))}

              <>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <span>Total (USD)</span>
                  <strong>
                    $ {cart.reduce((total, x) => total + x.price, 0).toFixed(2)}
                  </strong>
                </li>
              </>
            </ul>
            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo Code"
                />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing Address</h4>
            <form className="needs-validation" noValidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid first name is required
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="LastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid last name is required
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="usename" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Valid username is required
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping update
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 main-st"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter a valid shipping address
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="addrress2"
                    placeholder="Apartment or suites"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select
                    forHTML="country"
                    className="form-select"
                    id="country"
                    required=""
                  >
                    <option value="">Choose...</option>
                    <option value="">United States</option>
                    <option value="">Nepal</option>
                    <option value="">United Kingdom</option>
                    <option value="">Canada</option>
                  </select>

                  <div className="invalid-feedback">
                    Please enter a valid country
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="zip" className="form-label">
                    Zip <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Ziip code is required.</div>
                </div>
              </div>
              <hr className="my-4" />
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                />
                <label htmlFor="form-check-label" forHTML="same-address">
                  Shippin address is the same as my billing address
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                />
                <label htmlFor="form-check-label" forHTML="same-address">
                  Save this information for next time
                </label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    type="radio"
                    className="paymentMethod"
                    id="credit"
                    required=""
                  />
                  <label htmlFor="form-check-label" forHTML="credit">
                    Credit Card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="debit"
                    required=""
                  />
                  <label htmlFor="form-check-label" forHTML="Debit Card">
                    Debit Card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="paypal"
                    required=""
                  />
                  <label htmlFor="form-check-label" forHTML="paypal">
                    Paypal
                  </label>
                </div>
              </div>
              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required=""
                  />

                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">
                  Credit card number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
                  required=""
                />

                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="cc-expiration" className="form-label">
                  Expiration
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required=""
                />

                <div className="invalid-feedback">Expiration date required</div>
              </div>

              <div className="col-md-6">
                <label htmlFor="cc-cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required=""
                />

                <div className="invalid-feedback">
                  Security Code is required
                </div>
              </div>
              <hr className="my-4" />
              <button
                className="w-50 btn btn-outline-dark btn-lg my-1"
                type="submit"
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckOut
