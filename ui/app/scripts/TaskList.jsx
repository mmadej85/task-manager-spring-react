import React, {Component} from 'react';

export default class TaskList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		}
	};

	componentDidMount() {
		$.get('api/tasks/', (result) => {
			this.setState({tasks: result})
		});
	}

	render() {
		let taskNodes = this.state.tasks.map((task) => {
			return <div key={task.id}>{task.content}</div>
		});

		return <div >
			{taskNodes}
		</div>
	}
}