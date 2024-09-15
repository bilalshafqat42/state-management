import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  //useState
  /// react js hook to manage the state withing functional components
  const [counter, setCounter] = useState(0);
  // initial value of counter or before update
  // const counter = 0
  // after udpate the vlaue we will pass in setCounter

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div>
      <Counter
        counter={counter}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    </div>
  );
};

export default App;
