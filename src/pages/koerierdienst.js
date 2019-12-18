// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
import Dienst from "../page-components/Dienst";
// =========================

export default function koerierDienst({ data }) {
  const naam = data.contentfulKoeriersdienst.naam;
  const dienstPaginaTekst = data.contentfulKoeriersdienst.dienstPagina.json;
  const illustratie = data.contentfulKoeriersdienst.illustratie.file.url;

  return (
    <Layout>
      <Head
        title="Koerier dienst"
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
  query koerierDienst {
    # koerier dienst
    contentfulKoeriersdienst {
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
