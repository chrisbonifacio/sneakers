import React, { createContext, useState, useEffect } from "react"
import axiosWithAuth from "../utils/axiosWithAuth"

export const sneakerContext = createContext()

export default function SneakerProvider({ children }) {
  const [sneakers, setSneakers] = useState([])
  const [query, setQuery] = useState({
    name: "",
    page: 0,
    limit: 50,
  })

  const [fetching, setFetching] = useState(false)

  const { name, page, limit } = query

  useEffect(() => {
    async function getSneakers() {
      try {
        const sneakerData = await axiosWithAuth().get(
          `/sneakers?limit=${limit}&name=${name}&page=${page}`
        )
        setSneakers(sneakerData.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getSneakers()
  }, [query])

  return (
    <sneakerContext.Provider value={{ sneakers, setQuery }}>
      {children}
    </sneakerContext.Provider>
  )
}
