import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { HeroContainer } from "../css"

const HomepageHero = () => {
  return (
    <HeroContainer>
      <StaticImage
        src="../images/hero-background.jpg"
        alt="Vibrant Background"
        id="hero-background"
      />
      <div className="content">
        <StaticImage src="../images/bob.png" alt="Bob Robby" />
        <div className="quote">
          <p>
            "If you don't like vaping, and yacht rock... You're missing out,
            Brother."
          </p>
          <span>- Bob Robby, CEO</span>
        </div>
      </div>
    </HeroContainer>
  )
}

export default HomepageHero
