import React, {Component} from "react";

export default class TaskForm extends Component {

	render() {
		return <form className="taskForm">
			<h3>Add New Task</h3>
			<input type="text" placeholder="Task content" />
			<input type="submit" value="Add" className="btn"/>
		</form>
	}
}