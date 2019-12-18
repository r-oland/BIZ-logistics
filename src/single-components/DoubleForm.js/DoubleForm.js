// Components==============
import { L } from "mixins";
import React, { useState } from "react";
import styled from "styled-components";
import Form1 from "./Form1";
import Form2 from "./Form2";
// =========================

const FormAndSelect = styled.div`
  margin: ${({ theme: { spacing } }) => spacing.s8} auto;
  @media screen and (min-width: 900px) {
    max-width: 800px;
  }
`;

const SelectArea = styled.div`
  width: 100%;
  height: ${({ theme: { spacing } }) => spacing.s8};
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: 900px) {
    height: ${({ theme: { spacing } }) => spacing.s9};
  }
`;

const FormOption1 = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 0.1s;
  background-color: ${props => {
    const primary = props.theme.primary;
    const white = props.theme.white;
    const selectedForm = props.selectedForm;
    const F1 = props.F1;

    if (selectedForm !== F1) {
      return primary.s5.replace("1)", "0.7)");
    } else {
      return white;
    }
  }};
  color: ${props => {
    const white = props.theme.white;
    const black = props.theme.black;
    const selectedForm = props.selectedForm;
    const F1 = props.F1;

    if (selectedForm !== F1) {
      return white;
    } else {
      return black;
    }
  }};

  p {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

const FormOption2 = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 0.1s;
  background-color: ${props => {
    const primary = props.theme.primary;
    const white = props.theme.white;
    const selectedForm = props.selectedForm;
    const F2 = props.F2;

    if (selectedForm !== F2) {
      return primary.s5.replace("1)", "0.7)");
    } else {
      return white;
    }
  }};
  color: ${props => {
    const white = props.theme.white;
    const black = props.theme.black;
    const selectedForm = props.selectedForm;
    const F2 = props.F2;

    if (selectedForm !== F2) {
      return white;
    } else {
      return black;
    }
  }};

  p {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

const FormCard = styled.div`
  padding: ${({ theme: { spacing } }) => `${spacing.s7} ${spacing.s6}`};
  background-color: ${({ theme: { white } }) => white};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};

  @media screen and (min-width: 500px) {
    padding: ${({ theme: { spacing } }) => `${spacing.s8} ${spacing.s8}`};
  }

  @media screen and (min-width: 900px) {
    padding: ${({ theme: { spacing } }) => `${spacing.s8} ${spacing.s10}`};
  }
`;

const FormText = styled.div`
  text-align: center;

  .CTA {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }

  .message {
    margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s8}`};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  }
`;

const HideForm2 = styled.div`
  display: none;
`;

// add succes.js page to pages

export default function DoubleForm({ OfferteTekst, AfspraakTekst }) {
  const F1 = "Offerte";
  const F2 = "Afspraak";
  const [selectedForm, setSelectedForm] = useState(F1);

  const ConditionalRender = () => {
    if (selectedForm === F1) {
      return (
        <div>
          <FormText>
            <L className="CTA">Vraag een offerte aan</L>
            <p className="message">{OfferteTekst}</p>
          </FormText>
          <Form1 F1={F1} />
          <HideForm2>
            <Form2 F2={F2} />
          </HideForm2>
        </div>
      );
    } else if (selectedForm === F2) {
      return (
        <div>
          <FormText>
            <L className="CTA">Maak een afspraak</L>
            <p className="message">{AfspraakTekst}</p>
          </FormText>
          <Form2 F2={F2} />
        </div>
      );
    }
  };

  return (
    <FormAndSelect>
      <SelectArea>
        <FormOption1
          onClick={() => {
            setSelectedForm(F1);
          }}
          selectedForm={selectedForm}
          F1={F1}
        >
          <L>{F1}</L>
        </FormOption1>
        <FormOption2
          onClick={() => {
            setSelectedForm(F2);
          }}
          selectedForm={selectedForm}
          F2={F2}
        >
          <L>{F2}</L>
        </FormOption2>
      </SelectArea>
      <FormCard>
        <ConditionalRender />
      </FormCard>
    </FormAndSelect>
  );
}
