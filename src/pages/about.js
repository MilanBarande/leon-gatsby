import React, { useState } from "react"
import LinkList from "../components/linklist"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./about.scss"

const bio = {
  english:
    "Léon The Singer is a singer, dancer, and performer who blends 70s glam rock with Y2K dance pop to create his signature genre, Glam-Pop.\n A dancer and choreographer, Léon studied at Folkwang Universität der Künste from 2014 to 2018 and graduated with a dance BA.\n His music is shaped by a diverse mix of influences, from the ultra-pop sounds of Gaga, and Madonna, to the experimental edge of Lou Reed, Velvet Underground, and David Bowie. He also draws inspiration from his years of contemporary dance training, attending classes five days a week while discovering his own identity as a queer teenager.\n Léon The Singer’s artistic evolution reflects this dual influence—blending pop stardom with the vulnerability of personal growth. His on-stage persona is an alter ego that exudes confidence and charisma, allowing him to transform into a larger-than-life figure in his music.\n His new album, ANDRO GENES, which is set to come in the first half of 2026 merges glam rock’s audacity with dance pop’s irresistible energy.",
}

const AboutPage = ({ uri }) => {

  return (
    <Layout className="about">
      <SEO title="About" />
      <div className="about-text">
        {bio.english.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>
    
      <LinkList uri={uri} />
    </Layout>
  )
}

export default AboutPage
