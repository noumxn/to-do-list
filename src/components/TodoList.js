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

  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    })
  }

  // removeAllComplete = () => {
  //   this.setState({
  //     todos: this.state.todos.filter((todo) => !todo.complete)
  //   })
  // }

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
        <div style={{fontSize: 20, fontWeight: "bold"}}>Pending Tasks: {this.state.todos.filter(todo => !todo.complete).length}</div>
        <div>
          <button style={{fontSize: 16, margin: 7, padding: 5}} onClick={() => this.updateTodoToShow("all")}>All</button>
          <button style={{fontSize: 16, margin: 7, padding: 5}} onClick={() => this.updateTodoToShow("complete")}>In Progress</button>
          <button style={{fontSize: 16, margin: 7, padding: 5}} onClick={() => this.updateTodoToShow("active")}>Pending Tasks</button>
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
