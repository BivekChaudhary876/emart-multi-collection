import React from "react"
import Products from "./Products"

export default function Home() {
  return (
    <div className="container">
      <div className="card bg-dark text-dark border-0 my-3">
        <img
          src="/assets/bg3.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            <p className="card-text">
              <small>Last updated 3 mins ago...</small>
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  )
}
