import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
// import Header from "./Header"
// import Footer from "./Footer"
// import Nav from "./Nav"
import { LayoutContainer, MainContainer } from "../css"

const Layout = ({ children }) => {
  return (
    <HelmetProvider>
      <LayoutContainer>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Raleway:200,400,700&display=swap"
          />
        </Helmet>
        {/* <Nav /> */}
        {/* <Header /> */}
        <div className="content">
          <MainContainer>{children}</MainContainer>
        </div>
        {/* <Footer /> */}
      </LayoutContainer>
    </HelmetProvider>
  )
}

export default Layout
