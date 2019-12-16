// Components==============
import { Xs } from "mixins";
import React from "react";
import styled from "styled-components";
import { SimpleButton } from "../SimpleButton";
// =========================

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

const Bedrijfsnaam = styled.div``;

const ContactPersoon = styled.div`
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

const Bericht = styled.div`
  @media screen and (min-width: 900px) {
    grid-column: 1/3;
  }

  #bericht {
    width: 100%;
    min-height: ${({ theme: { spacing } }) => spacing.s13};
  }
`;

const FormButton = styled(SimpleButton)`
  max-width: 170px;
  margin: ${({ theme: { spacing } }) => spacing.s4} auto 0;

  @media screen and (min-width: 900px) {
    grid-column: 1/3;
  }
`;

export default function Form1({ F1 }) {
  return (
    <Form
      id={F1}
      name={F1}
      method="post"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value={F1} />
      {/* The `hidden` fields are required to support form submissions without JavaScript */}
      <Bedrijfsnaam className="formElement">
        <Label>Bedrijfsnaam</Label>
        <input name="Bedrijfsnaam" required />
      </Bedrijfsnaam>
      <ContactPersoon className="formElement">
        <Label>Contact persoon</Label>
        <input name="Contact persoon" required />
      </ContactPersoon>
      <Mail className="formElement">
        <Label>Email-adres</Label>
        <input type="email" name="Email-adres" required />
      </Mail>
      <Telefoon className="formElement">
        <Label>Telefoonnummer</Label>
        <input type="tel" name="Telefoonnummer" required />
      </Telefoon>
      <Bericht className="formElement">
        <Label>Bericht</Label>
        <textarea name="Bericht" id="bericht" required />
      </Bericht>
      <FormButton as="button" type="submit" className="formElement">
        Verstuur
      </FormButton>
    </Form>
  );
}
