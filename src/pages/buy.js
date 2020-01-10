import React from "react"
import LinkList from "../components/linklist"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./buy.scss"

const BuyPage = ({ uri }) => (
  <Layout>
    <SEO title="Buy" />
    <div className="coming-soon">
      <h1>
        COMING
        <br />
        SOON
      </h1>
    </div>
    <LinkList uri={uri} />
  </Layout>
)

export default BuyPage
