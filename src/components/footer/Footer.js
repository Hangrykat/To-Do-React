import React, { useState } from "react";
import "./Footer.css";
import plusLogo from "./plus.svg";
import shortid from "shortid";

const Footer = (props) => {
  const [inputText, setText] = useState({
    text: "",
  });

  // class Footer extends React.Component {
  //   state = {
  //     text: "",
  //   };

  const handleChange = (event) => {
    setText({
      [event.target.name]: event.target.value,
    });
  };

  //   handleChange = (event) => {
  //     this.setState({
  //       [event.target.name]: event.target.value,
  //     });
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
      text: inputText.text,
      complete: false,
      contentEditable: false,
    });
    setText({ text: "" });
  };

  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //     this.props.onSubmit({
  //       id: shortid.generate(),
  //       text: this.state.text,
  //       complete: false,
  //       contentEditable: false,
  //     });
  //     this.setState({
  //       text: "",
  //     });
  //   };

  return (
    <form id="inputBox" onSubmit={handleSubmit}>
      <input
        name="text"
        placeholder="Add a task...."
        id="inputField"
        autoComplete="off"
        value={inputText.text}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        type="button"
        value="Add task"
        id="addButton"
      >
        <div className="addIcon">
          <img src={plusLogo} alt="button" />
        </div>
      </button>
    </form>
  );
  //   render() {
  //     return (

  //     );
  //   }
  // }
};
export default Footer;
