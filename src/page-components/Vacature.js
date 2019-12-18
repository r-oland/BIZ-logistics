// Components==============
import React from "react";
import styled from "styled-components";
import JobForm from "../single-components/JobForm/JobForm";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s10};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s8};

  h2 {
    text-align: center;
  }
`;

export default function Vacature({ tekst }) {
  return (
    <Wrapper>
      <Container>
        <h2>Kom ons team versterken</h2>
        <JobForm tekst={tekst} />
      </Container>
    </Wrapper>
  );
}
