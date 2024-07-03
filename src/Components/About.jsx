import React from "react"
import { NavLink } from "react-router-dom"

const About = () => {
  return (
    <div>
      <div className="container py-1 my-5">
        <div className="row">
          <h1 className=" fw-bold text-center">About Us</h1>
          <div className="col-md-6 ">
            <p className="lead mb-4">
              Online shoppers are far more demanding than they once were. They
              now expect the same level of service while shopping digitally as
              they do while shopping in stores. They also expect a consistent
              shopping experience across every digital touchpoint so they can
              confidently shop wherever, whenever, and however they want. In
              fact, 73% of shoppers use multiple channels before completing a
              purchase. As for retailers, multi-channel e-commerce provides
              additional revenue streams to traditional pillars of revenue such
              as in-store commerce. Retailers can also complement basic
              e-commerce channels like websites with mobile apps, IoT
              experiences, and metaverse experiences through multi-channel
              e-commerce.
            </p>
            <NavLink to="/contact" className="btn btn-outline-dark px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col my-3 d-flex justify-content-center">
            <img
              src="/assets/about2.png"
              alt="About Us"
              height="400px"
              width="500px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
