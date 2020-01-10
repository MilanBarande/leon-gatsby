import React, { useState } from "react"
import LinkList from "../components/linklist"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./about.scss"

const bio = {
  french:
    "Léon c’est l’artiste complet, le touche à tout de talent, musicien, chanteur, danseur, perfomer… son concert « project yourself » est une véritable pépite à 360°. Sa voix, sa présence scénique, sa musique, son énergie rythmique électrisent. Aujourd’hui basé à Berlin, ce grand créatif propose une électro-pop qui puise ses influences dans la new wave, le jazz et la techno. Le voir en concert c’est plonger dans un véritable univers pop, élégant, incarné et singulier… une véritable expérience live.",
  english:
    "Singer/Songwritter, Dancer and Performer, Léon creates Electronic/Pop music with influences from 80's-New Wave, Jazz and Techno aesthetics. The young artist graduated with a Dance and Choreographic Bachelor at the infamous Folkwang University in Essen Germany and is now based in Berlin. Live - Léon plays solo, an interdisciplinary concert incorporating singing, electro music, dance, cabaret and theatrical elements that will invite you to trust in what you stand for - BE YOURSELF and do not wait for anyones approval.",
}

const AboutPage = ({ uri }) => {
  const [language, setLanguage] = useState("english")
  const toggleLanguage = () =>
    language === "english" ? setLanguage("french") : setLanguage("english")
  return (
    <Layout className="about">
      <SEO title="About" />
      <div className="about-text">{bio[language]}</div>
      <div className="toggle-language-button" onClick={toggleLanguage}>
        {language === "english" ? "🇫🇷" : "🇬🇧 🇺🇸"}
      </div>
      <LinkList uri={uri} />
    </Layout>
  )
}

export default AboutPage
