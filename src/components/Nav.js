import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Nav
