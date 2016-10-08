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
		return <div className="panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title">Add New Task</h3>
			</div>
			<div className="panel-body">
				<form className="taskForm" onSubmit={this.handleSubmit.bind(this)}>
					<input type="content" placeholder="Task subject" value={this.state.subject} onChange={this.handleContentChange.bind(this)}/>
					<input type="submit" value="Add" className="btn"/>
				</form>
			</div>
		</div>
	}
}