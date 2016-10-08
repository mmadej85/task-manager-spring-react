import $ from 'jquery';
import React, {Component} from "react";
import TaskList from "./TaskList.jsx";
import TaskForm from "./TaskForm.jsx";

export default class TaskBox extends Component {

	constructor(props) {
		super(props);
		this.state = {tasks: []};
	}

	handleTaskSubmit(task) {
		$.ajax({
			type: 'POST',
			url: this.props.url,
			data: JSON.stringify({subject: task.subject, content: "sample"}),
			contentType: 'application/json',
			success: function(newlyCreatedTask) {
				var tasks = this.state.tasks;
				var newTasks = tasks.concat([newlyCreatedTask]);
				this.setState({tasks: newTasks});
			}.bind(this)
		});
	};

	handleTaskDelete(task) {
		$.ajax({
			url: this.props.url + "/" + task.id,
			type: 'DELETE'
		});
		this.updateTaskList(this.state.tasks.filter((item) => item.id != task.id))
	}

	componentDidMount() {
		this.getAllTasks();
		setInterval(this.getAllTasks.bind(this), this.props.pollInterval)
	}

	getAllTasks() {
		$.get(this.props.url, this.updateTaskList.bind(this));
	}

	updateTaskList(data) {
		this.setState({tasks: data})
	}

	render() {
		return <div className="taskBox">
			<TaskForm onTaskSubmit={this.handleTaskSubmit.bind(this)}/>
			<TaskList tasks={this.state.tasks} onTaskDelete={this.handleTaskDelete.bind(this)}/>
		</div>
	}
}