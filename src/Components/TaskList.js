import React, { Component } from "react";
import './Css/TaskList.css';

class TaskList extends Component {

    createTasks(task) {
        return <li key={task.key}>{task.text}</li>
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