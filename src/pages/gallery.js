import React from "react"
import LinkList from "../components/linklist"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./gallery.scss"

const GalleryPage = () => (
  <Layout className="gallery">
    <SEO title="Gallery" />
    <div class="gallery-container">
      <div class="elfsight-app-e415eb7e-aaa6-4a9f-9806-3d264a39bac7"></div>
    </div>
    <LinkList />
  </Layout>
)

export default GalleryPage
