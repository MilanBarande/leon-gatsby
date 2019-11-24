import React from "react"
import { Link } from "gatsby"
import "./linklist.css"

export default () => (
  <ul className="link-list">
    <li className="list-item">
      <Link className="link" to="/video/">
        Video
      </Link>
    </li>
    <li className="list-item">
      <Link className="link" to="/listen/">
        Listen
      </Link>
    </li>
    <li className="list-item">
      <Link className="link" to="/gallery/">
        Gallery
      </Link>
    </li>
    <li className="list-item">
      <Link className="link" to="/shows/">
        Shows
      </Link>
    </li>
    <li className="list-item">
      <Link className="link" to="/about/">
        About
      </Link>
    </li>
  </ul>
)
