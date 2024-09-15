import React from "react";
import { connect } from "react-redux";
import { decrement, increment, reset } from "../redux/actions";

const Counter = ({ decrement, increment, reset, count }) => {
  return (
    <div>
      <h3>Counter : {count}</h3>
      <div>
        <button onClick={increment}>+ Increment</button>
        <button onClick={decrement}>- Decrement</button>
        <button onClick={reset}>0 Reset</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});
const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// props send data in the sahape of object
// props send data from parent to child
// as our app grows
// multiple components
// we need to pass data from parent a to child d
// we need send data from A -> b->c->d
// props drilling
// redux , react redux
// store -> directly to any component like i need to send data
// to component d i just need to dispatch from store

// pass state or manage the state directly from store to any componnent
