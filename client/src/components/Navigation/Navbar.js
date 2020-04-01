import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { ShoppingCart, ShoppingBag } from "@styled-icons/fa-solid"
import "./Navbar.scss"

let icon = {
  size: "1.3em"
}

const CartIcon = styled(ShoppingCart)`
  height: ${icon.size};
`
const BagIcon = styled(ShoppingBag)`
  height: ${icon.size};
`

export default function Navbar() {
  return (
    <div className="navbar">
      <header>
        <nav>
          <div className="logo">
            <NavLink to="/">Sneakers</NavLink>
          </div>
          <div className="links">
            <NavLink to="/sneakers">
              <BagIcon title="Shop for Sneakers" />
            </NavLink>
            <NavLink to="/cart">
              <CartIcon title="Shopping Cart" />
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  )
}
