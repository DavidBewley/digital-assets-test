import React, { Component } from "react";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillDashCircleFill } from "react-icons/bs";

import './Css/TaskList.css';

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  markAsComplete(key) {
    this.props.markAsComplete(key);
  }

  toggleTaskInEditMode(key) {
    this.props.toggleTaskInEditMode(key);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editTask(event.target[0].name, event.target[0].value);
  }

  createTasks(task) {
    var statusBox = this.renderBox(task);
    var toggle = this.renderCompleteIcon(task);
    var editModeRender = this.renderEditMode(task);
    return <div className="task" key={task.key}>

      <table class="Table">
        <tbody>
          <tr>
            <td className="status" >{statusBox}</td>
            <td className="task-text" >{task.text}</td>
            <td className="buttons" >{toggle} <span className="icon-container"><FaEdit className="icon edit-icon" onClick={() => this.toggleTaskInEditMode(task.key)}/></span> <span className="icon-container"><BsFillTrashFill className="icon delete-icon" onClick={() => this.delete(task.key)} /></span></td>
          </tr>
        </tbody>
      </table>

      {editModeRender}

    </div>
  }

  renderBox(task) {
    if (task.complete) {
      return <div className="green box"></div>
    }
    return <div className="red box"></div>
  }

  renderCompleteIcon(task) {
    if (task.complete) {
      return <span className="icon-container"><BsFillDashCircleFill className="icon untick-icon" onClick={() => this.markAsComplete(task.key)} /></span>
    }
    return <span className="icon-container"><FaCheck className="icon tick-icon" onClick={() => this.markAsComplete(task.key)} /></span>
  }

  renderEditMode(task){
    if(task.editMode){
      return <div className="edit-name-area">
      <form onSubmit={this.handleSubmit}>
        <input name={task.key} placeholder={task.text}></input>
        <button type="submit">Update</button>
      </form>
    </div>
    }
  }

  render() {
    var taskList = this.props.tasks
    var listTasks = taskList.map(this.createTasks)
    return (
      <div>{listTasks}</div>
    );
  }
}

export default TaskList;