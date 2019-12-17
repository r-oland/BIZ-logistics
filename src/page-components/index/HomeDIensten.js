// Components==============
import Divider from "assets/Divider.svg";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Button, Container } from "../../style/Mixins";

// =========================

const DienstContainer = styled(Container)`
  padding-top: ${({ theme: { spacing } }) => spacing.s4};
  text-align: center;

  @media screen and (min-width: 700px) {
    padding-top: ${({ theme: { spacing } }) => spacing.s7};
  }

  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s6};
  }

  @media screen and (min-width: 1200px) {
    padding-top: 0;
  }
`;

const Dienst = styled.div`
  grid-template-columns: 1fr 1fr;
  margin: ${({ theme: { spacing } }) => `${spacing.s9} 0 ${spacing.s12}`};
  display: grid;

  @media screen and (min-width: 1000px) {
    margin: ${({ theme: { spacing } }) => `${spacing.s10} 0 ${spacing.s13}`};
  }

  @media screen and (min-width: 1600px) {
    margin: ${({ theme: { spacing } }) => `${spacing.s11} 0 ${spacing.s14}`};
  }

  h3 {
    width: 40px;
    align-self: end;
    transform: translateY(-10px);

    @media screen and (min-width: 500px) {
      width: 100%;
      text-align: left;
    }
  }

  #title1,
  #title3 {
    @media screen and (min-width: 700px) {
      grid-column: 2/3;
    }
  }

  #title2 {
    @media screen and (min-width: 700px) {
      grid-column: 1/2;
    }
  }

  p {
    grid-column: 1/3;
    margin: ${({ theme: { spacing } }) => `${spacing.s8} 0 ${spacing.s4}`};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
    text-align: left;

    @media screen and (min-width: 700px) {
      margin-top: ${({ theme: { spacing } }) => spacing.s3};
    }

    @media screen and (min-width: 1200px) {
      line-height: ${({ theme: { lineHeight } }) => lineHeight.s5};
    }
  }

  #tekst1,
  #tekst3 {
    @media screen and (min-width: 700px) {
      grid-column: 2/3;
    }
  }

  #tekst2 {
    @media screen and (min-width: 700px) {
      grid-column: 1/2;
    }
  }

  #illustratie1,
  #illustratie2,
  #illustratie3 {
    width: 180px;
    justify-self: end;
    @media screen and (min-width: 700px) {
      width: 90%;
      max-width: 400px;
      align-self: center;
    }
  }

  #illustratie1,
  #illustratie3 {
    @media screen and (min-width: 700px) {
      grid-column: 1/2;
      grid-row: 1/4;
      justify-self: start;
    }
  }

  #illustratie2 {
    @media screen and (min-width: 700px) {
      grid-column: 2/3;
      grid-row: 1/4;
    }
  }

  a {
    margin-top: ${({ theme: { spacing } }) => spacing.s4};
    width: 140px;
    padding: ${({ theme: { spacing } }) => `${spacing.s3} ${spacing.s4}`};
    justify-self: center;
    grid-column: 1/3;

    @media screen and (min-width: 500px) {
      justify-self: start;
    }
  }

  #button1,
  #button3 {
    @media screen and (min-width: 700px) {
      grid-column: 2/3;
    }
  }

  #button2 {
    @media screen and (min-width: 700px) {
      grid-column: 1/2;
    }
  }
`;

const DividerSVG = styled.img`
  z-index: -1;
  position: absolute;
  bottom: calc(-40px + -3vw);
  width: 100vw;
  height: 450px;
  transform: scale(1.3);

  @media screen and (min-width: 1000px) {
    height: 400px;
  }

  @media screen and (min-width: 1600px) {
    height: 500px;
    bottom: -7vw;
  }
`;

export default function HomeDIensten({
  KNaam,
  KTekst,
  KIllustratie,
  ONaam,
  OTekst,
  OIllustratie,
  SNaam,
  STekst,
  SIllustratie
}) {
  return (
    <DienstContainer>
      <h2>Onze diensten</h2>
      <Dienst>
        <h3 id="title1">{SNaam}</h3>
        <img src={SIllustratie} alt="spoed-opdracht" id="illustratie1" />
        <p id="tekst1">{STekst}</p>

        <Button as={Link} to="/spoedOpdrachten" id="button1">
          Lees meer
        </Button>
      </Dienst>

      <Dienst style={{ position: "relative" }}>
        <DividerSVG src={Divider} alt="Divider" />
        <h3 id="title2">{KNaam}</h3>
        <img src={KIllustratie} alt="koerier-dienst" id="illustratie2" />
        <p id="tekst2">{KTekst}</p>

        <Button as={Link} to="/koerierdienst" id="button2">
          Lees meer
        </Button>
      </Dienst>
      <Dienst>
        <h3 id="title3">{ONaam}</h3>
        <img src={OIllustratie} alt="opslag" id="illustratie3" />
        <p id="tekst3">{OTekst}</p>

        <Button as={Link} to="/opslag" id="button3">
          Lees meer
        </Button>
      </Dienst>
    </DienstContainer>
  );
}
