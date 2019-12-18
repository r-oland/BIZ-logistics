// Components==============
import React from "react";
import styled from "styled-components";
import DoubleForm from "../single-components/DoubleForm.js/DoubleForm";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s10};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s8};

  h2 {
    text-align: center;
  }
`;

export default function OfferteAfspraak({ OfferteTekst, AfspraakTekst }) {
  return (
    <Wrapper>
      <Container>
        <h2>Neem contact op met ons team</h2>
        <DoubleForm OfferteTekst={OfferteTekst} AfspraakTekst={AfspraakTekst} />
      </Container>
    </Wrapper>
  );
}
