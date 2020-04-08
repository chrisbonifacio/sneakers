import React, { useState, useEffect, useContext } from "react"
import axiosWithAuth from "../../utils/axiosWithAuth"
import { userContext } from "../../contexts/userContext"
import { useRouteMatch } from "react-router-dom"
import "./SneakerPage.scss"

export default function SneakerPage(props) {
  const [sneaker, setSneaker] = useState(null)
  const match = useRouteMatch()
  const id = match.params.id
  const { addToCart } = useContext(userContext)

  useEffect(() => {
    async function getSneaker() {
      try {
        let res = await axiosWithAuth().get(`/sneakers/${id}`)
        let sneakerData = res.data.results[0]
        setSneaker(sneakerData)
      } catch (error) {
        console.log(error)
      }
    }
    getSneaker()
  }, [])

  return (
    <div className="sneaker-container">
      {sneaker ? (
        <div className="sneaker-grid">
          <div className="image">
            <img
              src={
                sneaker.media
                  ? sneaker.media.smallImageUrl
                  : "https://schulershoes-magento.s3.amazonaws.com/pub/media/catalog/product/placeholder/default/PLACEHOLDER.jpg"
              }
              alt={sneaker.title}
            />
          </div>

          <div className="info">
            <h2>{sneaker.title}</h2>
            <div className="price">
              <p>
                Price:{" "}
                <span className="light-text">${sneaker.retailPrice}</span>
              </p>
            </div>
            <button className="btn" onClick={() => addToCart(sneaker)}>
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="header">
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  )
}

SneakerPage.whyDidYouRender = true
