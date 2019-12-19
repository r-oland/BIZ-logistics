// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
import OfferteAfspraak from "../page-components/OfferteAfspraak";
// =========================

export default function offerteAfspraak({ data }) {
  const OfferteT =
    data.contentfulOfferteAfspraakVacature.offerteTekst.offerteTekst;
  const AfspraakT =
    data.contentfulOfferteAfspraakVacature.afspraakTekst.afspraakTekst;

  return (
    <Layout>
      <Head
        title="Offerte/afspraak"
        description="Wij staan u graag te woord voor alle Logistieke vragen, van opslag tot transport. Vraag direct een offerte aan of maak eerst een afspraak om alle mogelijkheden te bespreken"
        keywords="offerte, afspraak, Biz Logistics"
      />
      <OfferteAfspraak OfferteTekst={OfferteT} AfspraakTekst={AfspraakT} />
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
