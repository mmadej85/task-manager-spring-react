import React, {Component} from 'react';

export default class Task extends Component {

	render() {
		return <div className="task">{this.props.task.content}</div>
	}
}