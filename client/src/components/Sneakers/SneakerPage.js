import React from "react"
import { useParams, useLocation } from "react-router-dom"

export default function SneakerPage(props) {
  const location = useLocation()
  const { id, media, title } = location.state.sneaker

  return (
    <div className="sneaker-container">
      <h1>{id}</h1>
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
  )
}
