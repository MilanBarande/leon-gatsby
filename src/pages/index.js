import React from "react"
import LinkList from "../components/linklist"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"
import albumCover from "../images/album-cover.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={albumCover} alt="album-cover" id="album-cover" />
    <LinkList />
  </Layout>
)

export default IndexPage
