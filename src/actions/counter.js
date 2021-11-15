export function increment() {
  return {
    type: "INCREMENT",
  };
}

export function decrement(val) {
  return {
    type: "DECREMENT",
  };
}

export const incrementAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: "INCREMENT",
    });
  }, 1000);
};

export const decrementAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: "DECREMENT",
    });
  }, 1000);
};
