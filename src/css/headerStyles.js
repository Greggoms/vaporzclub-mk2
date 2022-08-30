import styled from "styled-components"

export const HeaderContainer = styled.header`
  z-index: 1;
  position: absolute;
  top: 3rem;
  width: 100vw;
  text-align: center;

  color: ${props => props.theme.grayscale.light1};
  font-size: 20pt;
`
