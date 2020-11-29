import React, { Component } from "react";
import './Css/TaskListContainer.css';
import AddTask from './AddTask.js';
// import TaskList from './TaskList.js';

class TaskListContainer extends Component {

  constructor(props) {
    super(props);
  }

  render(){
  return (
    <div className="TaskListContainer">
      <h1>Todays Tasks</h1>
      <div className="splitScreen">
        {/* <div className="leftPane"><TaskList /></div> */}
        <div className="rightPane"><AddTask /></div>
      </div>
    </div>
  );
}
}

export default TaskListContainer;
