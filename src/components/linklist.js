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
    url: "https://leonthesinger.bandcamp.com",
    title: "Buy",
    isExternal: true
  },
]

export default ({ uri }) => (
  <div className="link-list-container">
    <ul className="link-list">
      {pages.map(
        ({ url, title, isExternal }) =>
          uri !== url && (
            <li className="list-item" key={title}>
              <Link url={url} title={title} isExternal={isExternal} />
            </li>
          )
      )}
    </ul>
  </div>
)
