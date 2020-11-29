import React, { Component } from "react";
import './Css/TaskListContainer.css';
import TaskList from './TaskList.js';

class TaskListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [{
        key: '1606661929799',
        text: 'Call Plumber',
        complete: 'false'
      }]
    };

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

  }

  addTask(e) {
    if (this._inputElement.value !== "") {
      var newTask = {
        text: this._inputElement.value,
        key: Date.now(),
        complete: false
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

  deleteTask(key){
    var filteredItems = this.state.tasks.filter(function (item) {
      return (item.key !== key);
    });
    this.setState({
      tasks: filteredItems
    });
  }

  editTask(key, newText){
    var item = this.state.tasks.filter(function (item) {
      return (item.key == key);
    });

    item.text = newText;

    var filteredItems = this.state.tasks.filter(function (item) {
      return (item.key !== key);
    });
    this.setState({
      tasks: filteredItems
    });
  }

  render() {
    return (
      <div className="TaskListContainer">
        <h1>Todays Tasks</h1>
        <div className="splitScreen">
          <div className="leftPane"><TaskList tasks={this.state.tasks} delete={this.deleteTask} /></div>
          <div className="rightPane"><div className="AddTask">
            <form onSubmit={this.addTask}>
              <input ref={(a) => this._inputElement = a}
                placeholder="Task Name">
              </input>
              <button type="submit">Add</button>
            </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskListContainer;
