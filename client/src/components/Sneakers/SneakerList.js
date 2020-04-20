import React, { useContext } from "react"
import { sneakerContext } from "../../contexts/sneakerContext"
import SneakerCard from "./SneakerCard"
import "./SneakerList.scss"
import SearchBar from "../SearchBar/SearchBar"

export default function SneakerList() {
  const { sneakers } = useContext(sneakerContext)
  console.log(sneakers)
  return (
    <div className="sneaker-list">
      <div className="header">
        <h2>Shop for Kicks</h2>
        <SearchBar />
      </div>
      <div className="sneaker-grid">
        {sneakers.map(sneaker => {
          return <SneakerCard key={sneaker.id} sneaker={sneaker} />
        })}
      </div>
    </div>
  )
}
