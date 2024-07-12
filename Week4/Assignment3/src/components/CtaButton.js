import React from "react";

const CtaButton = ({ toggleVisibility }) => {
  return (
    <div className="cta" id="cta">
      <button id="cta-button" onClick={toggleVisibility}>
        Call to Action
      </button>
    </div>
  );
};

export default CtaButton;
