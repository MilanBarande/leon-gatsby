import React from "react"
import LinkList from "../components/linklist"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./shows.scss"

const ShowsPage = ({ uri }) => (
  <Layout className="shows">
    <SEO title="Shows" />
    <div className="live picture">
      <div
        id="seated-55fdf2c0"
        data-artist-id="73a78696-8ebd-4123-a098-1f500f93427d"
        data-css-version="2"
      />
    </div>
    <LinkList uri={uri} />
  </Layout>
)

export default ShowsPage
