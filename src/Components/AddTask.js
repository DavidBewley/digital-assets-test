import React, { Component } from "react";
import './Css/AddTask.css';
import TaskList from './TaskList.js';

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
          };
      
          this.addTask = this.addTask.bind(this);
      
          console.log(this.state.tasks);
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

    render() {
        return (
            <div className="AddTask">
                <form onSubmit={this.addTask}>
                    <input ref={(a) => this._inputElement = a}
                        placeholder="Task Name">
                    </input>
                    <button type="submit">Add</button>
                </form>
                <TaskList tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default AddTask;