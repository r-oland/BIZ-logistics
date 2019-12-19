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
  box-shadow: ${({ menuState, top }) => {
    if (menuState === "closed" && top === false) {
      return "none";
    } else {
      return "0 3px 3px hsla(0, 0%, 0%, 0.1)";
    }
  }};

  ul {
    display: flex;
    flex-direction: column;
    opacity: ${({ menuState }) => (menuState === "open" ? "1" : `0`)};
    transition: 0.4s;
    margin: ${({ theme: { spacing } }) => `${spacing.s5} auto ${spacing.s2}`};
    padding-bottom: ${({ theme: { spacing } }) => spacing.s5};
  }

  li {
    cursor: pointer;
    display: inline-block;
    padding: ${({ theme: { spacing } }) => `${spacing.s2} ${spacing.s2}`};
    margin: ${({ theme: { spacing } }) => `${spacing.s2} auto`};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    border-bottom: 3px solid
      ${({ theme: { primary } }) => primary.s1.replace("1)", "0.3)")};
    box-shadow: 0px -5px 0px ${({ theme: { primary } }) =>
        primary.s1.replace("1)", "0.1)")} inset;
    transition: 0.2s;

    &:hover {
      box-shadow: 0px -35px 0px ${({ theme: { primary } }) =>
          primary.s4.replace("1)", "0.5)")} inset;
    }
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
            <Link to="/over-ons" onClick={changeMenu}>
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
            <Link to="/spoed-opdrachten" onClick={changeMenu}>
              Spoed opdracht
            </Link>
          </li>
          <li>
            <Link to="/opslag" onClick={changeMenu}>
              Opslag
            </Link>
          </li>
          <li>
            <Link to="/offerte-afspraak" onClick={changeMenu}>
              Offerte / Afspraak
            </Link>
          </li>
        </ul>
      </Container>
    </MenuWrapper>
  );
}
