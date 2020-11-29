import React, { Component } from "react";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
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

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.editTask(event.target[0].name, event.target[0].value)
  }

  createTasks(task) {
    var statusBox = this.renderBox(task)
    var toggle = this.renderCompleteIcon(task)
    return <div className="task" key={task.key}>

      <table class="Table">
        <tbody>
          <tr>
            <td className="status" >{statusBox}</td>
            <td className="task-text" >{task.text}</td>
            <td className="buttons" >{toggle} <FaEdit className="icon" size={28} /> <MdDeleteForever className="icon" size={28} onClick={() => this.delete(task.key)} /></td>
          </tr>
        </tbody>
      </table>

      <div className="edit-name-area">
        <form onSubmit={this.handleSubmit}>
          <input name={task.key} placeholder={task.text}></input>
          <button type="submit">Update</button>
        </form>
      </div>

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
      return <BsFillDashCircleFill className="icon" size={28} onClick={() => this.markAsComplete(task.key)} />
    }
    return <FaCheck className="icon" size={28} onClick={() => this.markAsComplete(task.key)} />
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