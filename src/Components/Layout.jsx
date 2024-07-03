import { Link, Outlet, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Navbar from "./Navbar"
import Products from "./Products"
import { logOut } from "../services/firebase"
import { remove } from "../store/userSlice"

export const Layout = () => {
  let user = useSelector((state) => state.user.value)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    logOut()
      .then(() => {
        dispatch(remove())
        navigate("/login")
      })
      .catch((err) => {})
  }

  return (
    <div className="container">
      <header className="row">
        <div className="col-auto">
          <Link to="/" className="link-dark text-decoration-none">
            <h1>
              <Link className="navbar-brand fw-bold fs-1" to="/">
                MULTI COLLECTION
              </Link>
            </h1>
          </Link>
        </div>
        <div className="col">
          <ul className="nav justify-content-center my-2">
            {Object.keys(user).length ? (
              <>
                <li className="nav-item">
                  <span className="nav-link text-success ">{user.name}</span>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-link text-success nav-link "
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-dark" to="login">
                    <i className="fa fa-sign-in me-1"></i>Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className=" btn btn-outline-dark ms-2" to="register">
                    <i className="fa fa-user-plus me-1"></i>Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="col-4 ms-auto"></div>
      </header>
      <Navbar />
      <Outlet />
    </div>
  )
}
