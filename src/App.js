import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, incByFive } from "./store/counterSlice";
import CounterHeader from "./components/CounterHeader";
import CounterBody from "./components/CounterBody";

const App = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <h4>Counter App</h4>
      <CounterHeader />
      <CounterBody />
    </div>
  );
};

export default App;
