import React, { useContext } from "react"
import { Link } from "react-router-dom"
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
      {user.cart.items.length ? (
        <div className="items">
          {user.cart.items.map(item => (
            <CartItem item={item} />
          ))}
        </div>
      ) : (
        <p className="empty-cart">
          Your cart is empty
          <br />
          Add some kicks to your by looking at our{" "}
          <Link to="/sneakers">Catalog</Link>
        </p>
      )}
      <div className="cart-total">
        <span>Total:</span> ${user.cart.total}
      </div>
      <button className="btn">Checkout</button>
    </div>
  )
}
