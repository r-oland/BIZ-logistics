// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
import Dienst from "../page-components/Dienst";
// =========================

export default function opslag({ data }) {
  const naam = data.contentfulOpslag.naam;
  const dienstPaginaTekst = data.contentfulOpslag.dienstPagina.json;
  const illustratie = data.contentfulOpslag.illustratie.file.url;

  return (
    <Layout>
      <Head
        title="Opslag"
        description="Page description goes here"
        keywords="content"
      />
      <Dienst
        naam={naam}
        dienstPaginaTekst={dienstPaginaTekst}
        illustratie={illustratie}
      />
    </Layout>
  );
}

export const query = graphql`
  query opslag {
    # opslag
    contentfulOpslag {
      naam
      dienstPagina {
        json
      }
      illustratie {
        file {
          url
        }
      }
    }
  }
`;
