import React, { Component } from "react";
import './Css/TaskListContainer.css';
import TaskList from './TaskList.js';

class TaskListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [{
        complete: false,
        editMode: false,
        key: 1606673603904,
        text: "Call plumber"
      },
      {
        complete: false,
        editMode: false,
        key: 1606673603905,
        text: "Make doctors appointment"
      }]
    };

    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.markTaskAsComplete = this.markTaskAsComplete.bind(this);
    this.putTaskInEditMode = this.putTaskInEditMode.bind(this);
  }

  addTask(e) {
    if (this._inputElement.value !== "") {
      var newTask = {
        text: this._inputElement.value,
        key: Date.now(),
        complete: false,
        editMode: false
      };

      this.setState((prevState) => {
        return {
          tasks: prevState.tasks.concat(newTask)
        };
      });

      this._inputElement.value = "";
    }
    console.log(this.state.tasks);

    e.preventDefault();
  }

  deleteTask(key) {
    var filteredItems = this.state.tasks.filter(function (item) {
      return (item.key !== key);
    });
    this.setState({
      tasks: filteredItems
    });
  }

  editTask(key, newText) {
    var taskList = this.state.tasks;

    taskList.find(t => t.key == key).text = newText;
    this.setState({
      tasks: taskList
    });
  }

  markTaskAsComplete(key) {
    var taskList = this.state.tasks;

    var newState = !taskList.find(t => t.key === key).complete;
    taskList.find(t => t.key === key).complete = newState;
    this.setState({
      tasks: taskList
    });
  }

  putTaskInEditMode(key) {
    var taskList = this.state.tasks;

    var newState = !taskList.find(t => t.key === key).editMode;
    taskList.find(t => t.key === key).editMode = newState;
    this.setState({
      tasks: taskList
    });
  }

  render() {
    return (
      <div className="TaskListContainer">
        <h1>Todays Tasks</h1>
        <div><div className="add-task">
          <form onSubmit={this.addTask}>
            <input ref={(a) => this._inputElement = a}
              placeholder="Task Name">
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        </div>
        <div><TaskList tasks={this.state.tasks} delete={this.deleteTask} markAsComplete={this.markTaskAsComplete} editTask={this.editTask} putTaskInEditMode={this.putTaskInEditMode}/></div>
      </div>
    );
  }
}

export default TaskListContainer;
