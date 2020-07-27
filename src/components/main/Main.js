import React from "react";
import "./Main.css";
import Task from "../Task/Task";
import Footer from "../footer/Footer";

class Main extends React.Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  handleEditTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          //Suppose to update
          const todoss = {
            ...todo,
            contentEditable: !todo.contentEditable,
          };
          return todoss;
        } else {
          return todo;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <div id="taskLists">
          {this.state.todos.map((todo) => (
            <Task
              toggleComplete={() => this.toggleComplete(todo.id)}
              onDelete={() => this.handleDeleteTodo(todo.id)}
              onEdit={() => this.handleEditTodo(todo.id)}
              key={todo.id}
              todo={todo}
            />
          ))}
        </div>
        <Footer onSubmit={this.addTodo} />
      </div>
    );
  }
}

export default Main;
