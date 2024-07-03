import "./App.css"
import { Layout } from "./Components/Layout"
import Home from "./Components/Home"
import Products from "./Components/Products"
import Product from "./Components/Product"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Cart from "./Components/Cart"
import { Login } from "./Components/Login"
import { Register } from "./Components/Register"
import { Routes, Route } from "react-router-dom"
import CheckOut from "./Components/CheckOut"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
