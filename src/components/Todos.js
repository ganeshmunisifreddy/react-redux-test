import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTodos } from "../actions/todos";

function Todos(props) {
  const { todos = [], getTodos } = props;

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { getTodos })(Todos);
