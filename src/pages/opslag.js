// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
// =========================

export default function opslag({ data }) {
  // const naam = data.contentfulOpslag.naam;
  // const dienstPaginaTekst =
  //   data.contentfulOpslag.dienstPaginaTekst.dienstPaginaTekst;
  // const illustratie = data.contentfulOpslag.illustratie.file.url;

  return (
    <Layout>
      <Head
        title="Opslag"
        description="Page description goes here"
        keywords="content"
      />
    </Layout>
  );
}

export const query = graphql`
  query opslag {
    # opslag
    contentfulOpslag {
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
