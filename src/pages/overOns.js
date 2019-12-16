// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
// =========================

export default function overOns({ data }) {
  // const tekstvak1 = data.contentfulOverOns.tekstvak1.tekstvak1;
  // const tekstvak2 = data.contentfulOverOns.tekstvak2.tekstvak2;
  // const afbeelding1 = data.contentfulOverOns.afbeelding1.fluid;
  // const afbeelding2 = data.contentfulOverOns.afbeelding2.fluid;

  return (
    <Layout>
      <Head
        title="Over ons"
        description="Page description goes here"
        keywords="content"
      />
    </Layout>
  );
}

export const query = graphql`
  query overOns {
    # Over ons
    contentfulOverOns {
      tekstvak1 {
        tekstvak1
      }
      tekstvak2 {
        tekstvak2
      }
      afbeelding1 {
        fluid(maxWidth: 1500) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      afbeelding2 {
        fluid(maxWidth: 1500) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;
