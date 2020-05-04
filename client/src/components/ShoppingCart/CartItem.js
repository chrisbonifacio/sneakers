import React, { useContext } from "react"
import { userContext } from "../../contexts/userContext"
import "./CartItem.scss"

export default function CartItem({ item }) {
  const { user, removeFromCart } = useContext(userContext)
  const itemInCart = user.cart.items.find((cur) => cur.id === item.id)
  const { title, colorway, retailPrice, quantity } = itemInCart

  return (
    <div className="cart-item">
      <div className="item-container">
        <div className="image">
          <img src={item.media.thumbUrl} alt={item.title} />
        </div>
        <div class="info">
          <h2 className="title">{title}</h2>
          <p>
            Color: <span className="color">{colorway}</span>
          </p>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
      <div className="remove-btn">
        <p className="price">${retailPrice}</p>
        <button class="btn remove" onClick={() => removeFromCart(item)}>
          Remove
        </button>
      </div>
    </div>
  )
}
