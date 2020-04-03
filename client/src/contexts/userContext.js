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

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  )
}
