import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import SectionTitle from "./components/SectionTitle";
import GridContainer from "./components/GridContainer";
import CtaButton from "./components/CtaButton";

function App() {
  {
    /* button -> show/hide container*/
  }
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div id="wrapper">
      <Header />
      <Welcome />
      <SectionTitle />
      <GridContainer />
      <CtaButton toggleVisibility={toggleVisibility} />
      {isVisible && <GridContainer />}
    </div>
  );
}

export default App;
