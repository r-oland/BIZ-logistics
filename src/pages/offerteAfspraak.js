// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
// =========================

export default function offerteAfspraak({ data }) {
  // const OfferteT =
  //   data.contentfulOfferteAfspraakVacature.offerteTekst.offerteTekst;
  // const AfspraakT =
  //   data.contentfulOfferteAfspraakVacature.afspraakTekst.afspraakTekst;

  return (
    <Layout>
      <Head
        title="Offerte/afspraak"
        description="Page description goes here"
        keywords="content"
      />
    </Layout>
  );
}

export const query = graphql`
  query offerteAfspraak {
    # offerte afspraak vacature
    contentfulOfferteAfspraakVacature {
      offerteTekst {
        offerteTekst
      }
      afspraakTekst {
        afspraakTekst
      }
    }
  }
`;
