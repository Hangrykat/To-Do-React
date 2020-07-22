import React from 'react'; 
//import styles from './Footer.module.css';
import './Footer.css'; 
import plusLogo from './plus.svg'



function Footer() {
    return (
        <form id="inputBox">
            <input
            type="text"
            placeholder="Add a task...."
            id="inputField"
            autocomplete="off"
            />
            <button
            onclick="newTaskList.addTask()"
            type="submit"
            value="Add task"
            id="addButton"
            >
            <div class="addIcon"><img src={plusLogo} /></div>
            </button>
        </form>
    )
}

export default Footer;


