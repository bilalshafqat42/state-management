import React from "react";
import { useSelector } from "react-redux";

const CounterHeader = () => {
  const counter = useSelector((state) => state.counter.value);
  return (
    <div className="counter-header">
      <h1>Counter {counter}</h1>
    </div>
  );
};

export default CounterHeader;
