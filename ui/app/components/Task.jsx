import React, {Component} from "react";

export default class Task extends Component {

	render() {
		return <a href="#" className="list-group-item clearfix">{this.props.task.subject}
			<span className="pull-right">
				<button className="btn btn-xs btn-warning" onClick={() => this.props.onTaskDelete(this.props.task)}>
					<span className="glyphicon glyphicon-trash"></span>
				</button>
			</span>
		</a>
	}
}