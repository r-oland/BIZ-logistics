// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
// =========================

export default function spoedOpdrachten({ data }) {
  // const naam = data.contentfulSpoedOpdrachten.naam;
  // const dienstPaginaTekst =
  //   data.contentfulSpoedOpdrachten.dienstPaginaTekst.dienstPaginaTekst;
  // const illustratie = data.contentfulSpoedOpdrachten.illustratie.file.url;

  return (
    <Layout>
      <Head
        title="Spoed opdrachten"
        description="Page description goes here"
        keywords="content"
      />
    </Layout>
  );
}

export const query = graphql`
  query spoedOpdrachten {
    # Spoed opdrachten
    contentfulSpoedOpdrachten {
      naam
      dienstPaginaTekst {
        dienstPaginaTekst
      }
      illustratie {
        file {
          url
        }
      }
    }
  }
`;
