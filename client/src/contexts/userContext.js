import React, { createContext, useState } from "react"

export const userContext = createContext()

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: 1,
    cart: {
      items: [],
      total: 0
    }
  })

  function addToCart(item) {
    // make copies of prev values
    let newItem = { ...item }
    let prevUser = user
    let newUser = { ...user }

    // check for item in cart
    let itemInCart = prevUser.cart.items.findIndex(cur => cur.id === item.id)

    if (itemInCart !== -1) {
      // if item is in cart, update quantity
      newUser.cart.items[itemInCart].quantity += 1
    } else {
      // else, add item to list and initialize quantity to 1
      newItem.quantity = 1
      newUser.cart.items = prevUser.cart.items.concat(newItem)
    }

    // update total based on quantity
    newUser.cart.total = prevUser.cart.total + item.retailPrice

    setUser(newUser)
  }

  function removeFromCart(item) {
    let prevUser = user
    let newUser = { ...user }
    newUser.cart.items = prevUser.cart.items.filter(cur => cur.id !== item.id)
    newUser.cart.total = Math.min(0, prevUser.cart.total - item.retailPrice)

    setUser(newUser)
  }

  return (
    <userContext.Provider value={{ user, addToCart, removeFromCart }}>
      {children}
    </userContext.Provider>
  )
}
