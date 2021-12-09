import React, { useState } from "react";
const stateTutorial = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      {counter}
      <button onClick={increment}>increment</button>
    </div>
  );
};
export default stateTutorial;
