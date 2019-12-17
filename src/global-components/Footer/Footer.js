// Components==============
import Logo from "assets/Biz-logistics-logo-3.svg";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Button, Container, Xs } from "../../style/Mixins";
// =========================

const FooterFixed = styled.footer`
  margin-top: auto;
  min-height: 250px;
  text-align: center;
  background-color: ${({ theme: { primary } }) => primary.s4};
  p,
  a {
    color: ${({ theme: { white } }) => white};
  }

  @media screen and (min-width: 800px) {
    text-align: left;
  }
`;

const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const LogoSVG = styled.img`
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
  align-self: center;
  transform: translateY(30px);
  width: 80%;
  max-width: 250px;
`;

const Pages = styled.div`
  padding-top: ${({ theme: { spacing } }) => spacing.s8};

  p {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    margin-bottom: ${({ theme: { spacing } }) => spacing.s3};
  }

  li {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  }

  .bedrijf {
    grid-column: 1;

    @media screen and (min-width: 1200px) {
      grid-column: 2;
    }
  }

  .diensten {
    grid-column: 2;

    @media screen and (min-width: 1200px) {
      grid-column: 3;
    }
  }
`;

const Adres = styled.div`
  grid-column: 1/3;
  margin: ${({ theme: { spacing } }) => `${spacing.s8} 0 ${spacing.s3}`};

  @media screen and (min-width: 800px) {
    grid-column: 3;
  }
  @media screen and (min-width: 1200px) {
    grid-column: 4;
  }
  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  }

  #lessMargin {
    margin-bottom: 0;
  }
`;

const FooterButton = styled(Button)`
  background-color: ${({ theme: { secondary } }) => secondary.s4};
  width: 200px;
  margin: 0 auto;
`;

const CopyRight = styled(Xs)`
  text-align: center;
  grid-column: 1/3;
  margin-top: ${({ theme: { spacing } }) => spacing.s9};
  padding-bottom: ${({ theme: { spacing } }) => spacing.s3};

  @media screen and (min-width: 800px) {
    grid-column: 1/4;
  }

  @media screen and (min-width: 1200px) {
    grid-column: 1/5;
  }
`;

export default function Footer() {
  const data = useStaticQuery(graphql`
    query footer {
      contentfulHome {
        straatNaam
        postcodeStad
        mobiel
        email
      }
    }
  `);

  const straatNaam = data.contentfulHome.straatNaam;
  const postcodeStad = data.contentfulHome.postcodeStad;
  const mobiel = data.contentfulHome.mobiel;
  const email = data.contentfulHome.email;

  return (
    <FooterFixed>
      <FooterContainer>
        <LogoSVG src={Logo} alt="Logo" />
        <Pages>
          <p className="bedrijf">Bedrijf</p>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/overOns">
              <li>Over ons</li>
            </Link>
            <Link to="/#contact">
              <li>Contact</li>
            </Link>
            <Link to="/offerteAfspraak">
              <li>Offerte</li>
            </Link>
            <Link to="/offerteAfspraak">
              <li>Afspraak</li>
            </Link>
          </ul>
        </Pages>

        <Pages>
          <p className="diensten">Diensten</p>
          <ul>
            <Link to="/koerierdienst">
              <li>Koerierdienst</li>
            </Link>
            <Link to="/spoedOpdrachten">
              <li>spoed opdracht</li>
            </Link>
            <Link to="/opslag">
              <li>opslag</li>
            </Link>
          </ul>
        </Pages>
        <Adres>
          <p id="lessMargin">{straatNaam}</p>
          <p>{postcodeStad}</p>
          <a href={`tel:${mobiel}`}>
            <p>{mobiel}</p>
          </a>
          <a href={`mailto:${email}`}>
            <p>{email}</p>
          </a>
          <Link to="/offerteAfspraak">
            <FooterButton>Offerte / Afspraak</FooterButton>
          </Link>
        </Adres>
        <CopyRight>
          © Copyright - 2019 | Biz logistics | Alle rechten voorbehouden
        </CopyRight>
      </FooterContainer>
    </FooterFixed>
  );
}
