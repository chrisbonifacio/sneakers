import React, { createContext, useState, useEffect } from "react"
import axiosWithAuth from "../utils/axiosWithAuth"

export const sneakerContext = createContext()

export default function SneakerProvider({ children }) {
  const [sneakers, setSneakers] = useState([])

  useEffect(() => {
    async function getSneakers() {
      try {
        const sneakerData = await axiosWithAuth().get(
          "/sneakers?limit=10&page=10"
        )
        setSneakers(sneakerData.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getSneakers()
  }, [])

  return (
    <sneakerContext.Provider value={sneakers}>
      {children}
    </sneakerContext.Provider>
  )
}
