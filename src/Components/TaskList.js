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

  createTasks(task) {
    return <li key={task.key}>
      {task.complete.toString()} - {task.text}
      <button>Mark As Complete</button>
      <button>Edit</button>
      <button onClick={() => this.delete(task.key)}>Delete</button>
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