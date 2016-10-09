import React, {Component} from 'react';
import Task from './Task.jsx';

export default class TaskList extends Component {

	render() {
		let data = this.props.tasks;
		let taskNodes = typeof data != 'undefined' ? data.map((task) => {
			return <Task task={task} key={task.id} onTaskDelete={this.props.onTaskDelete}/>
		}) : undefined;

		return <div id='taskList' className='taskList panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>Current Tasks</h3>
			</div>
			<div className='panel-body'>
				<ul className='list-group list-group-root'>
					{taskNodes}
				</ul>
			</div>
		</div>
	}
}