import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counter";

function CounterWithHooks() {
  //const { increment, decrement, incrementAsync, decrementAsync } = props;
  const counter = useSelector((state) => state.counter);
  const dispatchInc = useDispatch();
  const dispatchDec = useDispatch();
  return (
    <div className="counter">
      <button onClick={() => dispatchDec(decrement())}>Decrement (-)</button>
      <h3>Count : {counter}</h3>
      <button onClick={() => dispatchInc(increment())}>Increment (+)</button>
    </div>
  );
}

export default CounterWithHooks;
