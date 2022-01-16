import React from "react"
import LinkList from "../components/linklist"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"
import albumCover from "../images/album-cover.jpeg"

const IndexPage = () => (
  <Layout className="home">
    <SEO title="Home" />
    <a href='https://smarturl.it/LTS_OneNightStand' target='_blank'><img src={albumCover} alt="album-cover" id="album-cover" /></a>
    <LinkList />
  </Layout>
)

export default IndexPage
