import React, { useState } from "react";
import "./Main.css";
import Task from "../Task/Task";
import Footer from "../footer/Footer";

const Main = () => {
  const [taskContainer, setNewTask] = useState({
    taskList: [],
  });
  // class Main extends React.Component {
  //   state = {
  //     todos: [],
  //   };

  const addTask = (task) => {
    setNewTask({
      taskList: [...taskContainer.taskList, task],
    });
  };
  //   addTodo = (todo) => {
  //     this.setState({
  //       todos: [...this.state.todos, todo],
  //     });
  //   };

  const toggleComplete = (id) => {
    setNewTask({
      taskList: taskContainer.taskList.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            complete: !task.complete,
          };
        } else {
          return task;
        }
      }),
    });
  };
  //   toggleComplete = (id) => {
  //     this.setState({
  //       todos: this.state.todos.map((todo) => {
  //         if (todo.id === id) {
  //           return {
  //             ...todo,
  //             complete: !todo.complete,
  //           };
  //         } else {
  //           return todo;
  //         }
  //       }),
  //     });
  //   };

  const handleDeleteTodo = (id) => {
    setNewTask({
      taskList: taskContainer.taskList.filter((task) => task.id !== id),
    });
  };

  //   handleDeleteTodo = (id) => {
  //     this.setState({
  //       todos: this.state.todos.filter((todo) => todo.id !== id),
  //     });
  //   };

  const handleEditTodo = (id) => {
    setNewTask({
      taskList: taskContainer.taskList.map((task) => {
        if (task.id === id) {
          const taskEditable = {
            ...task,
            contentEditable: !task.contentEditable,
          };
          return taskEditable;
        } else {
          return task;
        }
      }),
    });
  };

  //   handleEditTodo = (id) => {
  //     this.setState({
  //       todos: this.state.todos.map((todo) => {
  //         if (todo.id === id) {
  //           //Suppose to update
  //           const todoss = {
  //             ...todo,
  //             contentEditable: !todo.contentEditable,
  //           };
  //           return todoss;
  //         } else {
  //           return todo;
  //         }
  //       }),
  //     });
  //   };

  return (
    <div>
      <div id="taskLists">
        {taskContainer.taskList.map((task) => (
          <Task
            toggleComplete={() => toggleComplete(task.id)}
            onDelete={() => handleDeleteTodo(task.id)}
            onEdit={() => handleEditTodo(task.id)}
            key={task.id}
            todo={task}
          />
        ))}
      </div>
      <Footer onSubmit={addTask} />
    </div>
  );
};

export default Main;
