import React, { useContext } from "react"
import { sneakerContext } from "../../contexts/sneakerContext"
import SneakerCard from "./SneakerCard"
import "./SneakerList.scss"

export default function SneakerList() {
  const sneakers = useContext(sneakerContext)
  console.log(sneakers)
  return (
    <div className="sneaker-list">
      <h1>Shop for Kicks</h1>
      <div className="sneaker-grid">
        {sneakers.map(sneaker => {
          return <SneakerCard key={sneaker.id} sneaker={sneaker} />
        })}
      </div>
    </div>
  )
}
