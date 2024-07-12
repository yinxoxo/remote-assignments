import React, { useState } from "react";

import MobileNav from "./MobileNav";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <header>
      <nav id="desktop-nav">
        <div>Website Title/Logo</div>
        <div className="list">
          <div className="item">Item1</div>
          <div className="item">Item2</div>
          <div className="item">Item3</div>
          <div className="item">Item4</div>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div>Website Title/Logo</div>
        <button
          className={`hamburger ${isVisible ? "is-active" : ""}`}
          onClick={toggleNavVisibility}
        >
          <div className="bar"></div>
        </button>
        {isVisible && <MobileNav />}
      </nav>
    </header>
  );
};

export default Header;
