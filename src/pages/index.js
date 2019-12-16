// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
// =========================

export default function index({ data }) {
  // const welkomBericht = data.contentfulHome.welkomBericht;
  // const welkomToevoeging =
  //   data.contentfulHome.welkomToevoeging.welkomToevoeging;
  // const welkomAfbeelding = data.contentfulHomewelkomAfbeelding.file.url;
  // const welkomAfbeeldingMobiel =
  //   data.contentfulHome.welkomAfbeeldingMobiel.file.url;
  // const straatNaam = data.contentfulHome.straatNaam;
  // const postcodeStad = data.contentfulHome.postcodeStad;
  // const mobiel = data.contentfulHome.mobiel;
  // const email = data.contentfulHome.email;
  // const contactBericht = data.contentfulHome.contactBericht;

  // const KNaam = data.contentfulKoeriersdienst.naam;
  // const KTekst = data.contentfulKoeriersdienst.homePaginaTekst;
  // const KIllustratie = data.contentfulKoeriersdienst.illustratie.file.url;

  // const ONaam = data.contentfulOpslag.naam;
  // const OTekst = data.contentfulOpslag.homePaginaTekst;
  // const OIllustratie = data.contentfulOpslag.illustratie.file.url;

  // const SNaam = data.contentfulSpoedOpdrachten.naam;
  // const STekst = data.contentfulSpoedOpdrachten.homePaginaTekst;
  // const SIllustratie = data.contentfulSpoedOpdrachten.illustratie.file.url;

  return (
    <Layout>
      <Head
        title="Home"
        description="Page description goes here"
        keywords="content"
      />
    </Layout>
  );
}

export const query = graphql`
  query home {
    # home
    contentfulHome {
      welkomBericht
      welkomToevoeging {
        welkomToevoeging
      }
      welkomAfbeelding {
        file {
          url
        }
      }
      welkomAfbeeldingMobiel {
        file {
          url
        }
      }
      straatNaam
      postcodeStad
      mobiel
      email
      contactBericht
    }
    # koerier dienst
    contentfulKoeriersdienst {
      naam
      homePaginaTekst
      illustratie {
        file {
          url
        }
      }
    }
    # opslag
    contentfulOpslag {
      naam
      homePaginaTekst
      illustratie {
        file {
          url
        }
      }
    }
    # Spoed opdrachten
    contentfulSpoedOpdrachten {
      naam
      homePaginaTekst
      illustratie {
        file {
          url
        }
      }
    }
  }
`;
