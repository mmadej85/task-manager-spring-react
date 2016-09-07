import React, {Component} from "react";
import Task from "./Task.jsx";

export default class TaskList extends Component {

	render() {
		let data = this.props.tasks;
		let taskNodes = typeof data != 'undefined' ? data.map((task) => {
			return <Task task={task} key={task.id} onTaskDelete={this.props.onTaskDelete}/>
		}) : undefined;

		return <div className="tasklist">
			<h3>Current Tasks</h3>
			<ul className="list-group">
				{taskNodes}
			</ul>
		</div>
	}
}