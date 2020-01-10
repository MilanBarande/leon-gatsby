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

export default ({ uri }) => (
  <div className="link-list-container">
    <ul className="link-list">
      {pages.map(
        ({ url, title }) =>
          uri !== url && (
            <li className="list-item" key={title}>
              <Link url={url} title={title} />
            </li>
          )
      )}
    </ul>
  </div>
)
