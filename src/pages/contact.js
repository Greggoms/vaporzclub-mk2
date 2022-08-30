import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ContactPageContainer } from "../css/contactPageStyles"

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <StaticImage
        src="../images/contact_background.jpg"
        alt="Vape with Vape Cloud"
      />
      <div className="content">
        <div className="text">
          <h1>Contact Us</h1>
          <p>Vaporz Club was founded in 2020 by CEO Bob Robby.</p>
          <p>
            With over 35 years experience in the pipe and tobacco industry, Bob
            saw a huge opportunity to be the next big leader in the quickly
            growing vape industry.
          </p>
          <p>
            Together with his team of experts they keep their fingers on the
            pulse of the industry and stay up to date on all the newest and
            highest quality products available.
          </p>
          <p className="email">
            FOR PARTNERSHIP AND BUSINESS INQUIRIES CONTACT US AT: <br />
            <a href="mailto:vaporzclub@vape.com">vaporzclub@vape.com</a>
          </p>
          <p className="phone">
            OR BY TELEPHONE AT: <a href="tel:501-555-1234">(501) 555-1234</a>
          </p>
        </div>
        <StaticImage
          src="../images/vaporzclub_logo.png"
          alt="Vaporz Club Logo"
        />
      </div>
    </ContactPageContainer>
  )
}

export default ContactPage
