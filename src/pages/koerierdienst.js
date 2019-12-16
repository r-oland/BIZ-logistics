// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
// =========================

export default function koerierDienst({ data }) {
  // const naam = data.contentfulKoeriersdienst.naam;
  // const dienstPaginaTekst =
  //   data.contentfulKoeriersdienst.dienstPaginaTekst.dienstPaginaTekst;
  // const illustratie = data.contentfulKoeriersdienst.illustratie.file.url;

  return (
    <Layout>
      <Head
        title="Koerier dienst"
        description="Page description goes here"
        keywords="content"
      />
    </Layout>
  );
}

export const query = graphql`
  query koerierDienst {
    # koerier dienst
    contentfulKoeriersdienst {
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
