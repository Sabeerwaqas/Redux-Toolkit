import React from "react";
import "./counter.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const CounterApp = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <>
    <h2 className="heading-one">
      Basic Counter App Using <span className="redux-toolkit">Redux-Toolkit</span>
    </h2>
      <div className="counter-parent">
        <h1 className="number">{count}</h1>
        <div className="input-amount-parent">
          <input
            className="input-number"
            type="text"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button className="add-amount-btn" onClick={() => dispatch(incrementByAmount(addValue))}>
            Add Amount
          </button>
        </div>
        <div className="btn-parent">
          <button className="btn-reset" onClick={() => dispatch(resetAll)}>
            Reset
          </button>
          <button className="btn btn-one" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button className="btn btn-two" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterApp;
