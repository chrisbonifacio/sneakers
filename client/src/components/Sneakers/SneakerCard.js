import React from "react"
import { Link } from "react-router-dom"
import "./SneakerCard.scss"

export default function Sneaker(props) {
  const { id, title, colorway, media, retailPrice } = props.sneaker
  return (
    <Link to={{ pathname: `/sneakers/${id}` }}>
      <div className="sneaker">
        <div className="image">
          <img
            src={
              media.thumbUrl
                ? media.thumbUrl
                : "https://schulershoes-magento.s3.amazonaws.com/pub/media/catalog/product/placeholder/default/PLACEHOLDER.jpg"
            }
            alt={title}
          />
        </div>
        <div className="info">
          <h5 className="title">{title}</h5>
          <p className="color">{colorway}</p>
        </div>
        <div className="price">
          <p>${retailPrice ? retailPrice : 99}</p>
        </div>
      </div>
    </Link>
  )
}
