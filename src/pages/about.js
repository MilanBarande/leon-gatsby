import React, { useState } from "react"
import LinkList from "../components/linklist"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./about.scss"

const bio = {
  french:
    "Léon c’est l’artiste complet, le touche à tout de talent, musicien, chanteur, danseur, perfomer… son concert « project yourself » est une véritable pépite à 360°. Sa voix, sa présence scénique, sa musique, son énergie rythmique électrisent. Aujourd’hui basé à Berlin, ce grand créatif propose une électro-pop qui puise ses influences dans la new wave, le jazz et la techno. Le voir en concert c’est plonger dans un véritable univers pop, élégant, incarné et singulier… une véritable expérience live.",
  english:
    "Léon the Singer is the total package: singer, songwriter, musician and dancer. He is the quintessential millenial pop artist, with music and performances that are setting a new standard for the contemporary pop scene. His sound could be considered the love child of a threesome between Madonna, James Blake and David Bowie; and his songwriting refects on his experience as a queer artist seeking a sense of identity, self- empowerment and intimacy. In addition to being a self-taught, multi - talented musician, Léon is a trained dancer and pulls infuences from European contemporary dance choreographers such as Dimitris Papaioannou and Pina Bausch, which creates a unique performance aesthetic that is unprecedented in this feld.Léon The Singer is defnitely the artist you want to keep on your radar. In 2021, Léon comes back with a brilliant new project: 'The Noise Beside Your Thoughts'",
}

const AboutPage = ({ uri }) => {
  // const [language, setLanguage] = useState("english")
  // const toggleLanguage = () =>
  //   language === "english" ? setLanguage("french") : setLanguage("english")
  return (
    <Layout className="about">
      <SEO title="About" />
      <div className="about-text">{bio.english}</div>
      {/* <div className="toggle-language-button" onClick={toggleLanguage}>
        {language === "english" ? "🇫🇷" : "🇬🇧 🇺🇸"}
      </div> */}
      <LinkList uri={uri} />
    </Layout>
  )
}

export default AboutPage
