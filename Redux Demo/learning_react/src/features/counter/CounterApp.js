import React from "react";
import "./counter.css"
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const CounterApp = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="counter-parent">
        <h1 className="number">{count}</h1>
        <div className="btn-parent">
        <button className="btn-reset" onClick={() => dispatch(reset())}>Reset</button>
          <button className="btn btn-one" onClick={() => dispatch(increment())}>Increment</button>
          <button className="btn btn-two" onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    </>
  );
};

export default CounterApp;
