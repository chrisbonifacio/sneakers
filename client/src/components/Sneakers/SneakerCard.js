import React from "react"
import { Link } from "react-router-dom"
import "./SneakerCard.scss"

export default function Sneaker(props) {
  const { id, title, media } = props.sneaker
  return (
    <Link
      to={{ pathname: `/sneakers/${id}`, state: { sneaker: props.sneaker } }}
    >
      <div className="sneaker">
        <div className="image">
          {media.thumbUrl ? (
            <img src={media.thumbUrl} alt={title} />
          ) : (
            <h3>Coming Soon</h3>
          )}
        </div>

        <div className="info">
          <h5>{title}</h5>
          <p>$200</p>
        </div>
      </div>
    </Link>
  )
}
