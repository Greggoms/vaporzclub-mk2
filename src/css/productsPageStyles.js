import styled from "styled-components"

export const ProductsPageContainer = styled.section`
  display: grid;

  color: ${props => props.theme.grayscale.light1};

  h1 {
    text-align: center;
    font-size: 30pt;
    padding: 2rem 1rem 1rem;
  }

  /* the background image */
  .gatsby-image-wrapper {
    grid-column: 1;
    grid-row: 1;
  }

  .content {
    z-index: 1;
    grid-column: 1;
    grid-row: 1;
  }

  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1rem;

    @media ${props => props.theme.breakpoints.desktop} {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    &__product {
      display: grid;
      grid-template-columns: min-content 1fr;
      gap: 1rem;

      .gatsby-image-wrapper.product-image {
        align-self: flex-start;
        width: 100%;
        min-width: 10rem;
      }

      .flags {
        display: flex;
        gap: 3rem;
      }
    }

    h2 {
      margin-bottom: 1rem;
    }

    ul {
      margin-left: 1rem;
    }
  }
`
