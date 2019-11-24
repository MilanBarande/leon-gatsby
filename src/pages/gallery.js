import React from "react"
import LinkList from "../components/linklist"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./gallery.css"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <LinkList />
  </Layout>
)

export default GalleryPage
