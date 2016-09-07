import React, {Component} from "react";

export default class TaskForm extends Component {

	constructor(props) {
		super(props);
		this.state = {subject: ''};
	}

	handleContentChange(e) {
		this.setState({subject: e.target.value});
	};

	handleSubmit(e) {
		e.preventDefault();
		const subject = this.state.subject.trim();
		if (!subject) {
			return;
		}
		this.props.onTaskSubmit({subject: subject});
		this.setState({subject: ''});
	};

	render() {
		return <form className="taskForm" onSubmit={this.handleSubmit.bind(this)}>
			<h3>Add New Task</h3>
			<input type="content" placeholder="Task subject" value={this.state.subject} onChange={this.handleContentChange.bind(this)}/>
			<input type="submit" value="Add" className="btn"/>
		</form>
	}
}