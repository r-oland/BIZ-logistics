// Components==============
import React from "react";
import styled from "styled-components";
import { Container, L } from "../../style/Mixins";
// =========================

const HeroWrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s11};
  min-height: 85vh;

  @media screen and (min-width: 1380px) {
    margin-top: ${({ theme: { spacing } }) => spacing.s12};
  }

  @media screen and (min-width: 1700px) {
    margin-top: 300px;
  }

  h1 {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s7};

    @media screen and (min-width: 500px) {
      width: 70%;
      margin-bottom: ${({ theme: { spacing } }) => spacing.s8};
    }

    @media screen and (min-width: 768px) {
      margin-bottom: ${({ theme: { spacing } }) => spacing.s6};
    }

    @media screen and (min-width: 1380px) {
      width: 50%;
    }
  }

  p {
    width: 65%;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};

    @media screen and (min-width: 1380px) {
      max-width: 600px;
      font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    }
  }

  #desktop {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }

    position: relative;
    right: -130px;

    @media screen and (min-width: 900px) {
      position: absolute;

      bottom: -290px;
    }

    @media screen and (min-width: 1380px) {
      left: initial;
      right: 0;
      top: -30px;
    }
  }

  #mobile {
    position: absolute;
    right: -100px;
    top: 0;

    @media screen and (min-width: 500px) {
      right: -50px;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export default function Hero({
  welkomBericht,
  welkomToevoeging,
  welkomAfbeelding,
  welkomAfbeeldingMobiel
}) {
  return (
    <HeroWrapper>
      <Container style={{ position: "relative" }}>
        <h1>{welkomBericht}</h1>
        <div style={{ position: "relative" }}>
          <L>{welkomToevoeging}</L>
          <img
            src={welkomAfbeeldingMobiel}
            alt="Biz-logistics-hero"
            id="mobile"
          />
        </div>
        <img src={welkomAfbeelding} alt="Biz-logistics-mobile" id="desktop" />
      </Container>
    </HeroWrapper>
  );
}
