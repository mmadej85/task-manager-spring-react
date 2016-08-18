import React, {Component} from "react";
import Task from "./Task.jsx";
import {CONFIG} from "../constants/constants"
import {getAllTasks} from "../core/task-server"

export default class TaskList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		}
	};

	componentDidMount() {
		getAllTasks((result) => {this.setState({tasks: result})});
		setInterval(getAllTasks, CONFIG.defaultFetchInterval)
	}

	render() {
		let taskNodes = this.state.tasks.map((task1) => {
			return <Task task={task1} key={task1.id}/>
		});

		return <div className="tasklist">
			<h3>Current Tasks</h3>
			{taskNodes}
		</div>
	}
}