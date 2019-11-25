import React from "react"
import Link from "./link"
import "./linklist.css"

export default () => (
  <div className="link-list-container">
    <ul className="link-list">
      <li className="list-item">
        <Link url="/watch" title="Watch" />
      </li>
      <li className="list-item">
        <Link url="/listen" title="Listen" />
      </li>
      <li className="list-item">
        <Link url="/gallery" title="Gallery" />
      </li>
      <li className="list-item">
        <Link url="/shows" title="Shows" />
      </li>
      <li className="list-item">
        <Link url="/about" title="About" />
      </li>
      <li className="list-item">
        <Link url="/buy" title="Buy" />
      </li>
    </ul>
  </div>
)
