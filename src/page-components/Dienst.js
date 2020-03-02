// Components==============
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import styled from "styled-components";
import Leermeer from "../single-components/Leermeer";
import { Container, flexUnit } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s10};
  padding-bottom: ${({ theme: { spacing } }) => spacing.s6};

  @media screen and (min-width: 900px) {
    padding-bottom: 0;
    margin-top: ${({ theme: { spacing } }) => spacing.s11};
  }

  h1 {
    ${flexUnit(3, 24, 34, "vw", "font-size")}
    margin-bottom: ${({ theme: { spacing } }) => spacing.s6};
    text-align: center;

    @media screen and (min-width: 900px) {
      text-align: left;
      margin-bottom: ${({ theme: { spacing } }) => spacing.s6};
    }
  }

  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
    line-height: ${({ theme: { spacing } }) => spacing.s6};

    @media screen and (min-width: 900px) {
      font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
      line-height: ${({ theme: { lineHeight } }) => lineHeight.s5};
    }
  }

  img {
    padding-top: ${({ theme: { spacing } }) => spacing.s8};
    padding-bottom: ${({ theme: { spacing } }) => spacing.s8};

    @media screen and (min-width: 900px) {
      min-width: 400px;
      max-width: 500px;
      margin-left: ${({ theme: { spacing } }) => spacing.s8};
      transform: translateY(-40px);
      padding: 0;
    }
  }
`;

const Tekst = styled.div`
  @media screen and (min-width: 900px) {
    max-width: 750px;
    padding-right: ${({ theme: { spacing } }) => spacing.s8};
  }
`;

const FlexContainer = styled(Container)`
  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({ theme: { spacing } }) => spacing.s8};
  }
`;

const BgWrapper1 = styled.div`
  position: absolute;
  width: 100vw;
  height: 40vh;
  left: 0;
  top: 55vh;
  background-color: ${({ theme: { primary } }) =>
    primary.s1.replace("1)", "0.05)")};

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const BgWrapper2 = styled.div`
  display: none;

  @media screen and (min-width: 900px) {
    display: block;
    background-color: ${({ theme: { primary } }) =>
      primary.s1.replace("1)", "0.05)")};
    position: absolute;
    width: 100vw;
    height: 45vh;
    left: 0;
    top: 25vh;
  }
`;

export default function Dienst({ naam, dienstPaginaTekst, illustratie }) {
  return (
    <Wrapper>
      <BgWrapper1 />
      <BgWrapper2 />
      <Container>
        <h1>{naam}</h1>
      </Container>
      <FlexContainer>
        <Tekst>{documentToReactComponents(dienstPaginaTekst)}</Tekst>
        <img src={illustratie} alt={naam} />
      </FlexContainer>
      <Leermeer />
    </Wrapper>
  );
}
