import React from "react"
import LinkList from "../components/linklist"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"
import albumCover from "../images/album-cover.jpg"

const IndexPage = ({ path }) => (
  <Layout className="home">
    <SEO title="Home" />
    <img src={albumCover} alt="album-cover" id="album-cover" />
    <LinkList path={path} />
  </Layout>
)

export default IndexPage
