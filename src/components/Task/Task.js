import React from "react";
import "./Task.css";

const Task = (props) => {
  return (
    <div className="taskItem">
      <input
        onChange={props.toggleComplete}
        type="checkbox"
        className="taskCheckbox"
      ></input>
      <p
      ref={(input) => input && input.focus()}
        style={{
          textDecoration: props.todo.complete ? "line-through" : "",
        }}
        contentEditable={props.todo.contentEditable}
        onKeyPress={function (e) {
          if (e.key === "Enter") {
            props.onEdit();
          }
        }}
        className="taskText"
      >
        {props.todo.text}
      </p>
      <button className="editButton" onClick={props.onEdit}>
        Edit
      </button>
      <button className="deleteButton" onClick={props.onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Task;
