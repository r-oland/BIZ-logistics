// Components==============
import { Container } from "mixins";
import React from "react";
import styled from "styled-components";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
// =========================

const Container404 = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

export default function succes() {
  return (
    <Layout>
      <Head
        title="Succes"
        description="Deze pagina is niet beschikbaar"
        keywords="404, unavailable, not found"
      />
      <Container404>
        <h2>Succes</h2>
      </Container404>
    </Layout>
  );
}
