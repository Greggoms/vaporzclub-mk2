import styled from "styled-components"

export const HeroContainer = styled.section`
  display: grid;
  grid-template-rows: 100vh;

  .gatsby-image-wrapper {
    grid-column: 1;
    grid-row: 1;
  }

  .content {
    z-index: 1;
    grid-column: 1;
    grid-row: 1;

    display: grid;
    align-items: center;
    padding: 1rem;

    max-width: 405px;
    margin: 0 auto;
  }

  .quote {
    z-index: 2;
    grid-column: 1;
    grid-row: 1;
    margin: 1rem;
    padding: 0.25rem;
    max-width: 40%;
    color: ${props => props.theme.grayscale.light1};
    font-weight: 700;
    background: rgba(33, 33, 33, 0.4);

    p {
      margin-bottom: 0.5rem;
    }
  }
`
