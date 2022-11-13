import React from "react";

export default (props) => (
  <div
    style={{
      color: props.todo.complete ? "grey" : "black",
      textDecoration: props.todo.complete ? "line-through" : ""
    }}
    onClick={props.toggleComplete}
  >{props.todo.text}
  </div>
);
