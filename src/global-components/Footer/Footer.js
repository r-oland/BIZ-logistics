// Components==============
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const FooterFixed = styled.footer`
  margin-top: auto;
`;

export default function Footer() {
  const data = useStaticQuery(graphql`
    query footer {
      contentfulHome {
        straatNaam
        postcodeStad
        mobiel
        email
        contactBericht
      }
    }
  `);

  // const straatNaam = data.contentfulHome.straatNaam;
  // const postcodeStad = data.contentfulHome.postcodeStad;
  // const mobiel = data.contentfulHome.mobiel;
  // const email = data.contentfulHome.email;
  // const contactBericht = data.contentfulHome.contactBericht;

  return <FooterFixed></FooterFixed>;
}
