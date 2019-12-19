// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
import Dienst from "../page-components/Dienst";
// =========================

export default function spoedOpdrachten({ data }) {
  const naam = data.contentfulSpoedOpdrachten.naam;
  const dienstPaginaTekst = data.contentfulSpoedOpdrachten.dienstPagina.json;
  const illustratie = data.contentfulSpoedOpdrachten.illustratie.file.url;

  return (
    <Layout>
      <Head
        title="Spoed opdrachten"
        description="Heeft u goederen die vandaag nog geleverd of verzonden dienen te worden? Kijk niet verder! Uw pakket dezelfde dag nog bezorgd, het is hier mogelijk."
        keywords="spoed opdrachten, Eindhoven, Son"
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
  query spoedOpdrachten {
    # Spoed opdrachten
    contentfulSpoedOpdrachten {
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
