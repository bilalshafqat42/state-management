import React from "react";

const Counter = ({
  counter,
  handleDecrement,
  handleIncrement,
  handleReset,
}) => {
  return (
    <div>
      <h3>Counter : {counter}</h3>
      <div>
        <button onClick={handleIncrement}>+ Increment</button>
        <button onClick={handleDecrement}>- Decrement</button>
        <button onClick={handleReset}>0 Reset</button>
      </div>
    </div>
  );
};

export default Counter;
