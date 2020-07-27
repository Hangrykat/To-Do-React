import React from "react";
//import styles from './Footer.module.css';
import "./Footer.css";
import plusLogo from "./plus.svg";
import shortid from "shortid";

class Footer extends React.Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
      contentEditable: false,
    });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form id="inputBox" onSubmit={this.handleSubmit}>
        <input
          name="text"
          placeholder="Add a task...."
          id="inputField"
          autoComplete="off"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleSubmit}
          type="submit"
          value="Add task"
          id="addButton"
        >
          <div className="addIcon">
            <img src={plusLogo} alt="button" />
          </div>
        </button>
      </form>
    );
  }
}

export default Footer;
