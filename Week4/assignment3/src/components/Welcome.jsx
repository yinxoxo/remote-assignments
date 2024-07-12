import React, { useState } from "react";

const Welcome = () => {
  const [message, setMessage] = useState("Welcome Message");

  const handleClick = () => {
    setMessage((prevMessage) =>
      prevMessage === "Welcome Message"
        ? "Have a Good Time!!"
        : "Welcome Message"
    );
  };
  return (
    <div id="welcome" onClick={handleClick}>
      <div id="welcomeText">{message}</div>
    </div>
  );
};

export default Welcome;
