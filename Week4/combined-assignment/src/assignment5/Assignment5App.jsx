// src/App.jsx
import { useState } from "react";
import "./Assignment5App.css";
import Counter from "./Counter";
import Increment from "./Increment";
import AddButton from "./AddButton";

function App() {
  /* all+1 */
  const [incrementAll, setIncrementAll] = useState(false);
  /* counter+1 */
  const [countersItem, setCountersItem] = useState([0, 1, 2]);

  const handleIncrementAll = () => {
    setIncrementAll(true);
  };

  const resetIncrementAll = () => {
    setIncrementAll(false);
  };

  const handleAddCounter = () => {
    setCountersItem([...countersItem, countersItem.length]);
  };

  return (
    <div className="outer-wrapper ">
      <div className="wrapper">
        <Increment onClick={handleIncrementAll} />
        {countersItem.map((counter, index) => (
          <Counter
            key={index}
            incrementAll={incrementAll}
            resetIncrementAll={resetIncrementAll}
          />
        ))}
        <AddButton onClick={handleAddCounter} />
      </div>
    </div>
  );
}

export default App;
