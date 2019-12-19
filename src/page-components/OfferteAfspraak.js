// Components==============
import React from "react";
import styled from "styled-components";
import DoubleForm from "../single-components/DoubleForm.js/DoubleForm";
import { Container, flexUnit } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s10};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s8};

  h1 {
    text-align: center;
    ${flexUnit(3, 24, 34, "vw", "font-size")}
  }
`;

export default function OfferteAfspraak({ OfferteTekst, AfspraakTekst }) {
  return (
    <Wrapper>
      <Container>
        <h1>Neem contact op met ons team</h1>
        <DoubleForm OfferteTekst={OfferteTekst} AfspraakTekst={AfspraakTekst} />
      </Container>
    </Wrapper>
  );
}
