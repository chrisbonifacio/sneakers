import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { ShoppingCart, ShoppingBag } from "@styled-icons/fa-solid"
import { userContext } from "../../contexts/userContext"
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
  const { user } = useContext(userContext)
  const itemTotal = user.cart.items.reduce((acc, cur) => acc + cur.quantity, 0)
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
            <NavLink className="cart-link" to="/cart">
              {itemTotal > 0 && (
                <div className="cart-counter">
                  <span class="number">{itemTotal}</span>
                </div>
              )}
              <CartIcon className="cart-icon" title="Shopping Cart" />
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  )
}
