import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./video.css"

const VideoPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="album-cover" />
    <Link to="/">Home</Link>
  </Layout>
)

export default VideoPage
