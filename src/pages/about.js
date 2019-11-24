import React from "react"
import LinkList from "../components/linklist"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./about.css"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <LinkList />
  </Layout>
)

export default AboutPage
