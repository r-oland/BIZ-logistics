// Components==============
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import Leermeer from "../single-components/Leermeer";
import { Container, L } from "../style/Mixins";
// =========================

const OverWrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s10};

  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s5};
    text-align: center;
    grid-column: 1/3;
  }

  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s5};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }

  #focus {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

const OverOnsContainer = styled(Container)`
  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${({ theme: { spacing } }) => spacing.s10};
    grid-row-gap: ${({ theme: { spacing } }) => spacing.s8};
    align-items: center;
  }
`;

const Tekst1 = styled.div`
  grid-column: 1/2;
`;

const Dhl = styled(Img)`
  @media screen and (min-width: 900px) {
    max-width: 400px;
    width: 100%;
    grid-column: 2/3;
    justify-self: end;
    margin-bottom: ${({ theme: { spacing } }) => spacing.s8};
  }

  @media screen and (min-width: 1600px) {
    max-width: 500px;
  }
`;
const Focus = styled(L)`
  text-align: center;
  margin-top: ${({ theme: { spacing } }) => spacing.s8};

  @media screen and (min-width: 900px) {
    margin: 0;
    text-align: left;
  }
`;

const Tekst2 = styled.div`
  grid-column: 2/3;
`;

const Paketten = styled(Img)`
  display: none;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s9};
  width: 100%;

  @media screen and (min-width: 900px) {
    display: block;
    max-width: 400px;
    grid-column: 1/2;
    margin-bottom: ${({ theme: { spacing } }) => spacing.s8};
  }

  @media screen and (min-width: 1600px) {
    max-width: 500px;
  }
`;

const Square = styled.div`
  z-index: -1;
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme: { primary } }) => primary.s4.replace("1)", "0.03)")};
  width: 100vw;
  height: 87.5vh;

  @media screen and (min-width: 900px) {
    top: 35%;
    width: 50vw;
    height: 60vh;
    margin: 0;
  }
`;

export default function OverOns({
  tekstvak1,
  tekstvak2,
  afbeelding1,
  afbeelding2
}) {
  return (
    <OverWrapper>
      <OverOnsContainer>
        <h2>Wie zijn wij?</h2>
        <Tekst1>{documentToReactComponents(tekstvak1)}</Tekst1>
        <Dhl fluid={afbeelding1} alt="DHL" />
        <Paketten fluid={afbeelding2} alt="Pakketen" />
        <Tekst2>
          <Focus id="focus">Onze focus</Focus>
          <div>{documentToReactComponents(tekstvak2)}</div>
        </Tekst2>

        <div style={{ gridColumn: "1/3", marginTop: "3em" }}>
          <Leermeer />
        </div>
        <Square />
      </OverOnsContainer>
    </OverWrapper>
  );
}
