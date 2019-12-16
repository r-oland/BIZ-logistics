// Components==============
import { Link } from "gatsby";
import { Container } from "mixins";
import React from "react";
import styled from "styled-components";
// =========================

const MenuWrapper = styled.div`
  @media screen and (min-width: 950px) {
    display: none;
  }
  background-color: ${({ theme: { white } }) => white};
  color: ${({ theme: { white } }) => white};
  max-height: ${({ menuState }) => (menuState === "open" ? "60vh" : `0`)};
  visibility: ${({ menuState }) =>
    menuState === "open" ? "visible" : `hidden`};
  position: ${({ fixed }) => (fixed === true ? `fixed` : `block`)};
  top: 60px;
  right: 0;
  z-index: 147;
  transition: 0.5s;
  width: 100vw;
  box-shadow: ${({ menuState, top, theme }) => {
    if (menuState === "closed" && top === false) {
      return "none";
    } else {
      return "0 3px 3px hsla(0, 0%, 0%, 0.1)";
    }
  }};

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: ${({ theme: { spacing } }) => spacing.s7};
    grid-column-gap: ${({ theme: { spacing } }) => spacing.s2};
    align-items: center;
    justify-items: center;
    opacity: ${({ menuState }) => (menuState === "open" ? "1" : `0`)};
    transition: 0.4s;
    margin: ${({ theme: { spacing } }) => `${spacing.s5} auto ${spacing.s2}`};
    padding-bottom: ${({ theme: { spacing } }) => spacing.s5};
    text-align: center;
  }

  li {
    cursor: pointer;

    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

export default function AWMMenu({ menuState, setMenuState, top }) {
  function changeMenu() {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  }

  return (
    <MenuWrapper menuState={menuState} top={top} fixed={true}>
      <Container>
        <ul>
          <li>
            <Link to="/overOns" onClick={changeMenu}>
              Over ons
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={changeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/koerierdienst" onClick={changeMenu}>
              Koerierdienst
            </Link>
          </li>
          <li>
            <Link to="/spoedOpdrachten" onClick={changeMenu}>
              Spoed opdracht
            </Link>
          </li>
          <li>
            <Link to="/opslag" onClick={changeMenu}>
              Opslag
            </Link>
          </li>
          <li>
            <Link to="/offerteAfspraak" onClick={changeMenu}>
              Offerte / Afspraak
            </Link>
          </li>
        </ul>
      </Container>
    </MenuWrapper>
  );
}
