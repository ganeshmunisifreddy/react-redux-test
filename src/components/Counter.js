import React from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
} from "../actions/counter";

function Counter(props) {
  const { counter, increment, decrement, incrementAsync, decrementAsync } =
    props;
  return (
    <div className="counter">
      <button onClick={decrement}>Decrement (-)</button>
      <button onClick={decrementAsync}>Decrement Async (-)</button>
      <h3>Count : {counter}</h3>
      <button onClick={increment}>Increment (+)</button>
      <button onClick={incrementAsync}>Increment Async (+)</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps, {
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
})(Counter);
