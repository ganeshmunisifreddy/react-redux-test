export const getTodos = () => async (dispatch, getState) => {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  let todos = await response.json();
  dispatch({
    type: "GET_TODOS",
    payload: todos,
  });
};
