import React from "react"
import theme from "./src/theme"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Layout from "./src/components/Layout"

export const wrapRootElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  )
}

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

html {
  background-color: ${theme.grayscale.light1};
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font: 112.5%/1.45em;
}
body {
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}

@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}

/* https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone */
/* lortschi answer */
@supports (-webkit-overflow-scrolling: touch) {
  input, textarea {
    font-size: 16px;
  }
}
`
