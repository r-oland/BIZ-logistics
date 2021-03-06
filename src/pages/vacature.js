// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
import Vacature from "../page-components/Vacature";
// =========================

export default function vacature({ data }) {
  const VacatureT =
    data.contentfulOfferteAfspraakVacature.vacatureTekst.vacatureTekst;

  return (
    <Layout>
      <Head
        title="Vacature"
        description="Werken bij Biz Logistics."
        keywords="vacature, biz logistics, werken bij, koerierdienst"
      />
      <Vacature tekst={VacatureT} />
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
