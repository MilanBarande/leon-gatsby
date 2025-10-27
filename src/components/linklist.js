import React from "react"
import Link from "./link"
import "./linklist.scss"

const pages = [
  {
    url: "https://youtube.com/playlist?list=PLQYT23Kt6xQkm3B-L8YTl1VGRKlOS6Fbk&si=W0-iqQvrzR372z6A",
    title: "Watch",
    isExternal: true
  },
  {
    url: "https://ffm.to/y6w6qm0",
    title: "Listen",
    isExternal: true,
  },
  {
    url: "https://www.eventbrite.de/e/halloween-at-new-fears-tickets-1864790882729?aff=ebdssbcategorybrowse",
    title: "Events",
    isExternal: true
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "https://leonthesinger.bandcamp.com",
    title: "Merch",
    isExternal: true,
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
