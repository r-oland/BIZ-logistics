// Components==============
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import styled from "styled-components";
import Leermeer from "../single-components/Leermeer";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s10};
  padding-bottom: ${({ theme: { spacing } }) => spacing.s6};

  @media screen and (min-width: 900px) {
    padding-bottom: 0;
  }

  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s6};
    text-align: center;

    @media screen and (min-width: 900px) {
      text-align: left;
      margin-bottom: ${({ theme: { spacing } }) => spacing.s3};
    }
  }

  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
    line-height: ${({ theme: { spacing } }) => spacing.s6};

    @media screen and (min-width: 900px) {
      font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
      line-height: ${({ theme: { lineHeight } }) => lineHeight.s5};
    }
  }

  img {
    padding-top: ${({ theme: { spacing } }) => spacing.s5};

    @media screen and (min-width: 900px) {
      min-width: 400px;
      max-width: 500px;
      margin-left: ${({ theme: { spacing } }) => spacing.s8};
      transform: translateY(-20px);
    }
  }
`;

const Tekst = styled.div`
  @media screen and (min-width: 900px) {
    max-width: 800px;
    padding-right: ${({ theme: { spacing } }) => spacing.s8};
  }
`;

const BgWrapper1 = styled.div`
  background-color: ${({ theme: { primary } }) =>
    primary.s1.replace("1)", "0.05)")};
  padding: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s10}`};

  @media screen and (min-width: 900px) {
    background: initial;
    padding: 0;
  }
`;

const FlexContainer = styled(Container)`
  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: space-between;
  }
`;

const BgWrapper2 = styled.div`
  @media screen and (min-width: 900px) {
    background-color: ${({ theme: { primary } }) =>
      primary.s1.replace("1)", "0.05)")};
    padding: ${({ theme: { spacing } }) => `${spacing.s10} 0 ${spacing.s10}`};
  }
`;

export default function Dienst({ naam, dienstPaginaTekst, illustratie }) {
  return (
    <Wrapper>
      <div>
        <BgWrapper2>
          <Container>
            <h2>{naam}</h2>
          </Container>
          <BgWrapper1>
            <FlexContainer>
              <Tekst>{documentToReactComponents(dienstPaginaTekst)}</Tekst>
              <img src={illustratie} alt={naam} />
            </FlexContainer>
          </BgWrapper1>
        </BgWrapper2>
      </div>
      <Leermeer />
    </Wrapper>
  );
}
