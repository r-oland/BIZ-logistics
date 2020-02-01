// Components==============
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../style/GlobalStyles";
import { OverFlowFix } from "../../style/Mixins";
import { Variables } from "../../style/themes";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import IEWarning from "./IE/IEWarning";

// =========================

export const FormContext = React.createContext();

export default function Layout({ children }) {
  const F1 = "Offerte";
  const F2 = "Afspraak";
  const [selectedForm, setSelectedForm] = useState(F1);
  function setF1() {
    setSelectedForm(F1);
  }

  function setF2() {
    setSelectedForm(F2);
  }

  useEffect(() => {
    const data = localStorage.getItem("selectedForm");
    if (data) {
      setSelectedForm(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedForm", selectedForm);
  });

  const contextValue = {
    F1,
    F2,
    selectedForm,
    setSelectedForm,
    setF1,
    setF2
  };

  return (
    <ThemeProvider theme={Variables}>
      <FormContext.Provider value={contextValue}>
        <IEWarning />
        <OverFlowFix>
          <Nav />
          {children}
          <Footer />
        </OverFlowFix>
        <GlobalStyles />
      </FormContext.Provider>
    </ThemeProvider>
  );
}
