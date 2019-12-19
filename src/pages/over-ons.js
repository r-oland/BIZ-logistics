// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
import OverOns from "../page-components/OverOns";
// =========================

export default function overOns({ data }) {
  const tekstvak1 = data.contentfulOverOns.tekstvak3.json;
  const tekstvak2 = data.contentfulOverOns.tekstvak4.json;
  const afbeelding1 = data.contentfulOverOns.afbeelding1.fluid;
  const afbeelding2 = data.contentfulOverOns.afbeelding2.fluid;

  return (
    <Layout>
      <Head
        title="Over ons"
        description="Biz Logistics neemt het logistieke werk voordelig voor u uit handen. Van het opslaan van goederen tot een spoedige levering bij uw klanten"
        keywords="Biz Logistics, ekkersrijt, son"
      />
      <OverOns
        tekstvak1={tekstvak1}
        tekstvak2={tekstvak2}
        afbeelding1={afbeelding1}
        afbeelding2={afbeelding2}
      />
    </Layout>
  );
}

export const query = graphql`
  query overOns {
    # Over ons
    contentfulOverOns {
      tekstvak3 {
        json
      }
      tekstvak4 {
        json
      }
      afbeelding1 {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      afbeelding2 {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;
