// Components==============
import React, { useState } from "react";
import styled from "styled-components";
import MenuDropdownArrowImp from "./MenuDropdownArrow.inline.svg";
// =========================

const Wrapper = styled.div`
  transform: translateX(20px);
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1;
  align-items: center;
  padding: ${({ theme: { spacing } }) => spacing.s5};
`;

const Item = styled.div`
  grid-row: 1;
  grid-column: 1/3;
  color: ${({ theme, cardIsVisible }) =>
    cardIsVisible === "true" ? theme.primary.s4 : theme.gray.s7};
  transition: 0.2s;
  cursor: default;
`;

const MenuDropdownArrowSvg = styled(MenuDropdownArrowImp)`
  grid-row: 1;
  grid-column: 2/3;
  width: 10px;
  margin-left: 4.5em;

  .svgColor {
    fill: ${({ theme, cardisvisible }) =>
      cardisvisible === "true" ? theme.primary.s4 : theme.gray.s7};
  }
`;

const Card = styled.div`
  max-height: ${({ cardIsVisible }) =>
    cardIsVisible === "true" ? `1500%` : "0px"};
  visibility: ${({ cardIsVisible }) =>
    cardIsVisible === "true" ? `visible` : "hidden"};
  background-color: ${({ theme: { white } }) => white};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  position: absolute;
  top: 60px;
  transition: 0.5s ease-in-out;
  width: 80vw;
  z-index: 100;
  text-align: left;
  overflow: hidden;

  @media screen and (min-width: 600px) {
    width: 300%;
    left: -100%;
  }

  .dropdownItem {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    grid-template-rows: 2;
    align-items: center;

    border-bottom: rgba(112, 112, 112, 0.15) 2px solid;
    padding: ${({ theme: { spacing } }) => `${spacing.s3} ${spacing.s5}`};
    transition: 0.6s;
    opacity: ${({ cardIsVisible }) => (cardIsVisible === "true" ? `1` : "0")};

    &:hover {
      transform: translateX(7.5px);
    }
  }

  img {
    grid-column: 1;
    grid-row: 1/3;
    width: 28px;
    height: 28px;
  }

  p {
    color: ${({ theme: { primary } }) => primary.s4};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    margin-bottom: ${({ theme: { spacing } }) => spacing.s1};
    grid-column: 2/3;
    grid-row: 1;
  }

  .subDropdownText {
    color: ${({ theme: { gray } }) => gray.s7};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
    grid-column: 2/3;
    grid-row: 2;
  }
`;

export default function MenuCardDropdown3({ children, name }) {
  const [cardIsVisible, setCardIsVisible] = useState("false");

  const handleChange = () => {
    const Query =
      typeof window !== "undefined" && window.matchMedia("(min-width: 800px)");

    if (cardIsVisible === "false" && Query.matches) {
      setCardIsVisible("true");
    } else if (cardIsVisible === "true" && Query.matches) {
      setCardIsVisible("false");
    }
  };

  const handleClickChange = () => {
    const Query =
      typeof window !== "undefined" && window.matchMedia("(max-width: 800px)");

    if (cardIsVisible === "false") {
      setCardIsVisible("true");
    } else if (cardIsVisible === "true" && Query.matches) {
      setCardIsVisible("false");
    }
  };

  return (
    <Wrapper onMouseEnter={handleChange} onMouseLeave={handleChange}>
      <Grid onClick={handleClickChange}>
        <Item cardIsVisible={cardIsVisible}>{name}</Item>
        <MenuDropdownArrowSvg cardisvisible={cardIsVisible} />
      </Grid>
      <Card cardIsVisible={cardIsVisible}>{children}</Card>
    </Wrapper>
  );
}
