import React from "react";

export default (props) => (
  <div style={{
    display: "flex",
    justifyContent: "center"
  }}>
    <div
      style={{
        fontWeight: "bold",
        marginLeft: 15,
        marginRight: 15,
        fontSize: 20,
        color: props.todo.complete ? "green" : "black",
        // textDecoration: props.todo.complete ? "line-through" : ""
      }}
      onClick={props.toggleComplete}
    >{props.todo.text}
    </div>
    <button
      style={{
        margin: 5
      }}
      onClick={props.onDelete}>Done</button>
  </div>
);
