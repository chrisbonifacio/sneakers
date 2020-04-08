import React, { useContext } from "react"
import { userContext } from "../../contexts/userContext"
import CartItem from "./CartItem"
import "./Cart.scss"

export default function Cart() {
  const { user } = useContext(userContext)
  return (
    <div className="cart">
      <div className="header">
        <h2>Cart</h2>
      </div>
      <div className="items">
        {user.cart.items.map(item => (
          <CartItem item={item} />
        ))}
      </div>
      <div className="cart-total">
        <span>Total:</span> ${user.cart.total}
      </div>
      <button className="btn">Checkout</button>
    </div>
  )
}
