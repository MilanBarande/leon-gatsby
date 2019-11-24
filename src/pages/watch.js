import React from "react"
import Layout from "../components/layout"
import LinkList from "../components/linklist"
import SEO from "../components/seo"

import "./watch.css"

const WatchPage = () => (
  <Layout>
    <SEO title="Watch" />
    <iframe
      height="320"
      src="https://www.youtube.com/embed/poMpkA6IKl4"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
      allowfullscreen
    />
    <LinkList />
  </Layout>
)

export default WatchPage
