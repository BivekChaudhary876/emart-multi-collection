import React from "react"

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Questions?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src="assets/contact.jpeg"
              alt="Contact Us"
              height="300px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="Input1"
                  placeholder="Bivek Chaudhary"
                />
              </div>
              <div class="mb-3">
                <label for="Input2" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="Input1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="lTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="Textarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-dark">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
