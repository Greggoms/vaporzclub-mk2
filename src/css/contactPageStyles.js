import styled from "styled-components"

export const ContactPageContainer = styled.section`
  display: grid;
  grid-template-rows: 100vh;

  h1 {
    text-align: center;
    font-size: 30pt;
  }

  a {
    color: ${props => props.theme.colors.link};
    text-decoration: none;
  }

  .gatsby-image-wrapper {
    grid-column: 1;
    grid-row: 1;
  }

  .content {
    z-index: 1;
    grid-column: 1;
    grid-row: 1;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    .text {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      color: ${props => props.theme.grayscale.light1};
      background: rgba(100, 100, 100, 0.4);
      padding: 1rem;
      font-size: 14pt;
    }

    .email {
      max-width: 15rem;
      margin: 0 auto;

      @media ${props => props.theme.breakpoints.desktop} {
        max-width: 100%;
        width: 80%;
      }
    }

    .phone {
      text-align: center;
    }

    .gatsby-image-wrapper {
      align-self: flex-end;
      max-width: 4rem;

      @media ${props => props.theme.breakpoints.desktop} {
        margin: 2rem 10rem auto auto;
        max-width: 8rem;
      }
    }
  }
`
