// Components==============
import { Button, Xs } from "mixins";
import React, { useState } from "react";
import styled from "styled-components";
import BijlagenImp from "./Bijlagen.inline.svg";
// =========================

const FormCard = styled.div`
  margin: ${({ theme: { spacing } }) => `${spacing.s8} auto `};
  padding: ${({ theme: { spacing } }) => `${spacing.s7} ${spacing.s6}`};
  background-color: ${({ theme: { white } }) => white};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  border-top: ${({ theme: { spacing } }) => spacing.s8}
    ${({ theme: { primary } }) => primary.s5.replace("1)", "0.7)")} solid;

  @media screen and (min-width: 500px) {
    padding: ${({ theme: { spacing } }) => `${spacing.s8} ${spacing.s8}`};
  }

  @media screen and (min-width: 900px) {
    padding: ${({ theme: { spacing } }) => `${spacing.s8} ${spacing.s10}`};
    border-top: ${({ theme: { spacing } }) => spacing.s9}
      ${({ theme: { primary } }) => primary.s5.replace("1)", "0.7)")} solid;
    max-width: 800px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  .formElement {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s5};

    input,
    select,
    textarea,
    label {
      padding: ${({ theme: { spacing } }) => ` 11px ${spacing.s4}`};
      width: 100%;
      border-radius: ${({ theme: { borderRadius } }) => borderRadius};
      border: none;
      background-color: ${({ theme: { primary } }) =>
        primary.s7.replace("1)", "0.05)")};
      color: ${({ theme: { gray } }) => gray.s8};

      @media screen and (min-width: 900px) {
        width: 250px;
      }
    }
  }
`;

const Label = styled(Xs)`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  color: ${({ theme: { primary } }) => primary.s7};
`;

const VoorNaam = styled.div``;

const AchterNaam = styled.div`
  @media screen and (min-width: 900px) {
    justify-self: end;
  }
`;

const Mail = styled.div``;

const Telefoon = styled.div`
  @media screen and (min-width: 900px) {
    justify-self: end;
  }
`;

const Functie = styled.div`
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; /* Remove default arrow */
    cursor: pointer;
  }
`;

const GeboorteDatum = styled.div`
  @media screen and (min-width: 900px) {
    justify-self: end;
  }
`;

const CV = styled.div`
  input {
    visibility: hidden;
    position: absolute;
  }

  #placeholdInput {
    cursor: pointer;
    display: block;
    display: flex;
    align-items: center;
    border: ${props => {
      const fileField = props.children[2].props.filefield;
      const tobigmessage = props.children[2].props.tobigmessage;
      const nofilemessage = props.children[2].props.nofilemessage;

      if (fileField === tobigmessage || fileField === nofilemessage) {
        return "solid #ff3636 2px";
      } else {
        return "none";
      }
    }};
  }
`;

const BijlagenSvg = styled(BijlagenImp)`
  width: ${({ theme: { spacing } }) => spacing.s5};
  margin-right: ${({ theme: { spacing } }) => spacing.s4};

  #changeColor {
    fill: ${props => {
      const fileField = props.filefield;
      const tobigmessage = props.tobigmessage;
      const nofilemessage = props.nofilemessage;
      const primary = props.theme.primary;

      if (fileField === tobigmessage || fileField === nofilemessage) {
        return "#ff3636";
      } else {
        return primary.s7;
      }
    }};
  }
`;

const Bericht = styled.div`
  @media screen and (min-width: 900px) {
    grid-column: 1/3;
  }

  #bericht {
    width: 100%;
    min-height: ${({ theme: { spacing } }) => spacing.s13};
  }
`;

const FormButton = styled(Button)`
  max-width: 180px;
  margin: ${({ theme: { spacing } }) => spacing.s4} auto 0;

  @media screen and (min-width: 900px) {
    grid-column: 1/3;
  }
`;

const Tekst = styled.p`
  margin-bottom: ${({ theme: { spacing } }) => spacing.s7};
  text-align: center;
`;

// add succes.js page to pages

export default function JobForm({ tekst }) {
  const formName = "Sollicitatie";
  const initialMessage = "Voeg bestand toe";
  const toBigMessage = "TE GROOT (max 500kb)";
  const noFileMessage = "Geen bestand";
  const [fileField, setFileField] = useState(initialMessage);

  function addFile(e) {
    const file = e.target.files[0];
    if (file.size < 500000) {
      setFileField(file.name);
    } else {
      setFileField(toBigMessage);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (fileField !== toBigMessage) {
      document.querySelector(`#${formName}`).submit();
    }
  };

  const checkForFile = () => {
    if (fileField === initialMessage) {
      setFileField(noFileMessage);
    }
  };

  return (
    <FormCard>
      <Tekst>{tekst}</Tekst>
      <Form
        id={formName}
        name={formName}
        method="post"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value={formName} />
        {/* The `hidden` fields are required to support form submissions without JavaScript */}
        <VoorNaam className="formElement">
          <Label>Voornaam</Label>
          <input name="Voornaam" required />
        </VoorNaam>
        <AchterNaam className="formElement">
          <Label>Achternaam</Label>
          <input name="Achternaam" required />
        </AchterNaam>
        <Mail className="formElement">
          <Label>Email-adres</Label>
          <input type="email" name="Email-adres" required />
        </Mail>
        <Telefoon className="formElement">
          <Label>Telefoonnummer</Label>
          <input type="tel" name="Telefoonnummer" required />
        </Telefoon>
        <Functie className="formElement">
          <Label>Functie</Label>
          <select name="Functie" required>
            <option>Koerierdienst</option>
          </select>
        </Functie>
        <GeboorteDatum className="formElement" required>
          <Label>geboorte datum</Label>
          <input type="date" name="geboorte datum" required />
        </GeboorteDatum>
        <CV className="formElement">
          <Label>CV</Label>
          <input
            type="file"
            name="CV"
            id="file"
            onChange={e => {
              addFile(e);
            }}
            required
          />
          <label
            id="placeholdInput"
            name="CV"
            htmlFor="file"
            filefield={fileField}
            tobigmessage={toBigMessage}
            nofilemessage={noFileMessage}
          >
            <BijlagenSvg
              filefield={fileField}
              tobigmessage={toBigMessage}
              nofilemessage={noFileMessage}
            />
            {fileField}
          </label>
        </CV>
        <Bericht className="formElement">
          <Label>Bericht</Label>
          <textarea name="Bericht" id="bericht" required />
        </Bericht>
        <FormButton
          as="button"
          type="submit"
          onClick={checkForFile}
          className="formElement"
        >
          Stuur sollicitatie
        </FormButton>
      </Form>
    </FormCard>
  );
}
