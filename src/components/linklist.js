import React from "react"
import Link from "./link"
import "./linklist.scss"

const pages = [
  {
    url: "/watch",
    title: "Watch",
  },
  {
    url: "/listen",
    title: "Listen",
  },
  {
    url: "/gallery",
    title: "Gallery",
  },
  {
    url: "/shows",
    title: "Shows",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/buy",
    title: "Buy",
  },
]

const trimLastChar = string => string.slice(0, -1)

export default ({ path }) => (
  <div className="link-list-container">
    <ul className="link-list">
      {pages.map(
        ({ url, title }) =>
          trimLastChar(path) !== url && (
            <li className="list-item">
              <Link url={url} title={title} />
            </li>
          )
      )}
    </ul>
  </div>
)
