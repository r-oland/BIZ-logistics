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
        description="Heeft u waardevolle goederen die in een opslag geplaatst moet worden? In ons magazijn in Son kunt u er zeker van zijn dat uw goederen op korte of lange termijn veilig opgeborgen staan."
        keywords="opslag, son, ekkersrijt"
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
