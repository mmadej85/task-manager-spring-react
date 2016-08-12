import React, {Component} from "react";
import Task from "./Task.jsx";

export default class TaskList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		}
	};

	retrieveTasksFromServer(){
		$.get('api/tasks/', (result) => {
			this.setState({tasks: result})
		});
	}

	componentDidMount() {
		this.retrieveTasksFromServer();
		setInterval(this.retrieveTasksFromServer, 2000)
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