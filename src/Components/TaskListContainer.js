import './Css/TaskListContainer.css';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

function TaskListContainer() {
  return (
    <div className="TaskListContainer">
        <h1>Todays Tasks</h1>
        <div className="splitScreen">
          <div className="topPane"><TaskList/></div>
          <div className="bottomPane"><AddTask/></div>
        </div>
    </div>
  );
}

export default TaskListContainer;
