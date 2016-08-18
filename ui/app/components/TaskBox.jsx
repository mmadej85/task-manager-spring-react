import React, {Component} from 'react';
import TaskList from "./TaskList.jsx";
import TaskForm from "./TaskForm.jsx";

export default class TaskBox extends Component {

	render() {
		return <div className="taskBox">
			<h1>TODO List Application</h1>
			<TaskList/>
			<TaskForm/>
		</div>
	}
}