import React from "react";
import TodoForm from "./TodoForm";

export default class TodoList extends React.Component {
  state = {
    todos: []
  }

  addTodo = (todo) => {
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    })
  }
  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map(todo => (
          <div key={todo.id}
          >
            {todo.text}
          </div>
        ))}
      </div>
    )
  }
}
