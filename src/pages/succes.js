// Components==============
import { Container } from "mixins";
import React from "react";
import styled from "styled-components";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
import { L } from "../style/Mixins";
// =========================

const Container404 = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  text-align: center;

  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
  }
`;

export default function succes() {
  return (
    <Layout>
      <Head
        title="Succes"
        description="Formulier is verzonden"
        keywords="Biz Logistics, succes,"
      />
      <Container404>
        <h2>We hebben uw bericht ontvangen!</h2>
        <L>We proberen u zo snel mogelijk een reactie tegemoet te sturen</L>
      </Container404>
    </Layout>
  );
}
