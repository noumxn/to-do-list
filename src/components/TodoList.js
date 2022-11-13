import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all"
  }

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            // id: todo.id,
            // text: todo.text,
            complete: !todo.complete
          }
        } else {
          return todo;
        }
      })
    });
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s
    })
  }

  handleDelete = () => {

  }

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete)
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete)
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <div>Tasks Left: {this.state.todos.filter(todo => !todo.complete).length}</div>
        <div>
          <button onClick={() => this.updateTodoToShow("all")}>All</button>
          <button onClick={() => this.updateTodoToShow("active")}>Pending Tasks</button>
          <button onClick={() => this.updateTodoToShow("complete")}>Completed Tasks</button>
        </div >
        {
          todos.map(todo => (
            <Todo
              key={todo.id}
              toggleComplete={() => this.toggleComplete(todo.id)}
              onDelete={() => this.handleDelete(todo.id)}
              todo={todo}
            />
          ))
        }
      </div >
    )
  }
}
