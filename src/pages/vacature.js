// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
// =========================

export default function vacature({ data }) {
  // const VacatureT =
  //   data.contentfulOfferteAfspraakVacature.vacatureTekst.vacatureTekst;

  return (
    <Layout>
      <Head
        title="Vacature"
        description="Page description goes here"
        keywords="content"
      />
    </Layout>
  );
}

export const query = graphql`
  query vacature {
    # offerte afspraak vacature
    contentfulOfferteAfspraakVacature {
      vacatureTekst {
        vacatureTekst
      }
    }
  }
`;
