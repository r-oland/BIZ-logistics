// Components==============
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Button } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  max-width: 900px;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} auto ${spacing.s8}`};

  text-align: center;

  @media screen and (min-width: 900px) {
    margin: ${({ theme: { spacing } }) => `${spacing.s5} auto ${spacing.s10}`};
  }

  span {
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
    display: block;
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
  }
`;

export default function Leermeer() {
  return (
    <Wrapper>
      <span>
        Wilt u meer weten of bent u benieuwd wat wij voor uw bedrijf kunnen
        betekenen? Maak dan een afspraak, vraag een factuur aan of neem direct
        contact op.
      </span>
      <Link to="/offerteAfspraak">
        <Button>contact</Button>
      </Link>
    </Wrapper>
  );
}
