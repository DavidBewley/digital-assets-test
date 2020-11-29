import React, { Component } from "react";
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
    console.log(event.target[0].value)
    this.props.editTask(event.target[0].name, event.target[0].value)
  }

  createTasks(task) {
    var box = this.renderBox(task)
    return <div className="task" key={task.key}>
      <div className="row">
        <div className="column-status">{box}</div>
        <div className="column task-name">{task.text}</div>
      </div>

      <div className="row">
        <div className="column-half">
          <button onClick={() => this.markAsComplete(task.key)}>Mark As Complete</button><button onClick={() => this.delete(task.key)}>Delete</button>
        </div>
        <div className="column-half">
          <form onSubmit={this.handleSubmit}>
            <input name={task.key} placeholder={task.text}></input>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  }

  renderBox(task) {
    if (task.complete) {
      return <div className="green box"></div>
    }
    return <div className="red box"></div>
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