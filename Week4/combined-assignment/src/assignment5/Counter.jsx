import React, { useState, useEffect } from "react";

const Counter = ({ incrementAll, resetIncrementAll }) => {
  const [number, setNumber] = useState(0);

  const plus = () => {
    setNumber(number + 1);
  };

  /* all +1*/
  useEffect(() => {
    if (incrementAll) {
      setNumber((prevNumber) => prevNumber + 1);
      resetIncrementAll();
    }
  }, [incrementAll]);

  return (
    <div className="counter">
      <button onClick={plus} className="plusButton">
        +1
      </button>
      <div className="number">{number}</div>
    </div>
  );
};

export default Counter;
