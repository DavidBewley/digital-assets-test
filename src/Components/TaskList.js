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
    return <li key={task.key}>
      {task.complete.toString()}

      <div>{task.text}</div>

      <button onClick={() => this.markAsComplete(task.key)}>Mark As Complete</button>
      <button onClick={() => this.delete(task.key)}>Delete</button>

      <form onSubmit={this.handleSubmit}>
        <input name={task.key} placeholder={task.text}></input>
        <button type="submit">Update</button>
      </form>

    </li>
  }

  render() {
    var taskList = this.props.tasks
    var listTasks = taskList.map(this.createTasks)
    return (
      <ul>{listTasks}</ul>
    );
  }
}

export default TaskList;