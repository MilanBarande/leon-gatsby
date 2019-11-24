import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import albumCover from "../images/album-cover.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={albumCover} alt="album-cover" id="album-cover" />
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
  </Layout>
)

export default IndexPage
