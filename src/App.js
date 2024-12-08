import React from "react";
import CounterHeader from "./components/CounterHeader";
import CounterBody from "./components/CounterBody";

const App = () => {
  return (
    <div className="main-container">
      <h4>Counter App</h4>
      <CounterHeader />
      <CounterBody />
    </div>
  );
};

export default App;
