import React from "react"
import LinkList from "../components/linklist"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const ShowsPage = () => (
  <Layout>
    <SEO title="Shows" />
    <LinkList />
  </Layout>
)

export default ShowsPage
