import React, { useState } from "react"
import LinkList from "../components/linklist"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./listen.scss"

const ListenPage = () => (
  <Layout className="listen">
    <SEO title="Listen" />
    <iframe
      width="80%"
      height="600"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/874459783&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    ></iframe>
    <LinkList />
  </Layout>
)

export default ListenPage
