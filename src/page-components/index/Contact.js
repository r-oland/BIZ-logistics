// Components==============
import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../../global-components/Layout/Layout";
import GoogleMap from "../../single-components/Map";
import { Button, Container, StyledUnderline } from "../../style/Mixins";
// =========================

const Card = styled.div`
  background-color: ${({ theme: { white } }) => white};
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  margin: 0 auto ${({ theme: { spacing } }) => spacing.s10};
  padding: ${({ theme: { spacing } }) => `${spacing.s8} 0`};

  @media screen and (min-width: 768px) {
    margin: 0 auto ${({ theme: { spacing } }) => spacing.s13};
    padding: ${({ theme: { spacing } }) => `${spacing.s9} 0`};
  }
`;

const Scroll = styled.div`
  position: absolute;
  top: -7vw;
`;

const ContactContainer = styled(Container)`
  h2 {
    text-align: center;

    @media screen and (min-width: 900px) {
      text-align: left;
      margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
    }
  }

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 50px 1fr;
  }
`;

const LeftSide = styled.div`
  @media screen and (min-width: 900px) {
    width: 80%;
  }

  @media screen and (min-width: 1600px) {
    padding: ${({ theme: { spacing } }) => `${spacing.s8} 0`};
  }
`;

const Adres = styled.div`
  grid-column: 1/3;
  margin: ${({ theme: { spacing } }) => `${spacing.s5} 0 ${spacing.s3}`};

  @media screen and (min-width: 800px) {
    grid-column: 3;
  }
  @media screen and (min-width: 1200px) {
    grid-column: 4;
  }
  p {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  }

  #lessMargin {
    margin-bottom: 0;
  }
`;

const Bar = styled.div`
  @media screen and (min-width: 900px) {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 1.5px;
    background-color: ${({ theme: { gray } }) => gray.s7};
    height: 60%;
  }
`;

const ContactBericht = styled.p`
  margin: ${({ theme: { spacing } }) => `${spacing.s5} 0`};

  @media screen and (min-width: 900px) {
    margin: ${({ theme: { spacing } }) => `${spacing.s8} 0 ${spacing.s7}`};
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} auto ${spacing.s8} `};
  padding: 0 ${({ theme: { spacing } }) => spacing.s1};
  max-width: 300px;

  @media screen and (min-width: 600px) {
    padding: 0;
    max-width: 400px;
  }

  @media screen and (min-width: 900px) {
    max-width: 300px;
  }

  button {
    width: 120px;
  }
`;

export default function Contact({
  straatNaam,
  postcodeStad,
  mobiel,
  email,
  contactBericht
}) {
  const { F1, F2, setF1, setF2 } = useContext(FormContext);

  return (
    <Container style={{ position: "relative" }}>
      <Scroll id="contact" />
      <Card>
        <ContactContainer>
          <LeftSide>
            <h2>Contact</h2>
            <Adres>
              <p id="lessMargin">{straatNaam}</p>
              <p>{postcodeStad}</p>
              <a href={`tel:${mobiel}`}>
                <p>
                  <StyledUnderline> {mobiel}</StyledUnderline>
                </p>
              </a>
              <a href={`mailto:${email}`}>
                <p>
                  <StyledUnderline> {email}</StyledUnderline>
                </p>
              </a>
            </Adres>
            <ContactBericht>{contactBericht}</ContactBericht>
            <Flex>
              <Link to="/offerte-afspraak" onClick={setF1}>
                <Button>{F1}</Button>
              </Link>
              <Link to="/offerte-afspraak" onClick={setF2}>
                <Button>{F2}</Button>
              </Link>
            </Flex>
          </LeftSide>
          <Bar></Bar>
          <GoogleMap />
        </ContactContainer>
      </Card>
    </Container>
  );
}
