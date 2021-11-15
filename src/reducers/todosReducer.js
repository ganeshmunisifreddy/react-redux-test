export default function todosReducer(state = [], action) {
  switch (action.type) {
    case "GET_TODOS":
      return [...action.payload];
    default:
      return state;
  }
}
