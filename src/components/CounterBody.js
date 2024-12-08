import React from "react";
import { useDispatch } from "react-redux";
import { add, remove, incByFive } from "../store/counterSlice";

const CounterBody = () => {
  const dispatch = useDispatch();
  return (
    <div className="button-section">
      <span>
        <button
          className="inc-buttons"
          onClick={() => {
            dispatch(add());
          }}
        >
          +
        </button>
        <button
          className="inc-buttons"
          onClick={() => {
            dispatch(remove());
          }}
        >
          -
        </button>
      </span>
      <button
        className="inc-by-five"
        onClick={() => {
          dispatch(incByFive(5));
        }}
      >
        Inc By 5
      </button>
    </div>
  );
};

export default CounterBody;
