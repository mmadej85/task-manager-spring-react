import React, {Component} from 'react';

export default class TaskForm extends Component {

	constructor(props) {
		super(props);
		this.state = {subject: '', content: ''};
	}

	handleContentChange(e) {
		this.setState({content: e.target.value});
	};

	handleSubjectChange(e) {
		this.setState({subject: e.target.value});
	};

	handleSubmit(e) {
		e.preventDefault();
		const subject = this.state.subject.trim();
		const content = this.state.content.trim();
		if (!subject) {
			return;
		}
		this.props.onTaskSubmit({subject: subject, content: content});
		this.setState({subject: '', content: ''});
	};

	render() {
		return <div className='panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>Add New Task</h3>
			</div>
			<div className='panel-body'>
				<form className='form-horizontal taskForm' onSubmit={this.handleSubmit.bind(this)}>
					<div className='form-group'>
						<label htmlFor ='inputTaskSubject' className='col-sm-1 control-label'>Tast Subject</label>
						<div className='col-sm-11'>
							<input id='inputTaskSubject' type='content' className='form-control' placeholder='Task subject' value={this.state.subject} onChange={this.handleSubjectChange.bind(this)}/>
						</div>
					</div>
					<div className='form-group'>
						<label htmlFor ='inputTaskContent' className='col-sm-1 control-label'>Task Content</label>
						<div className='col-sm-11'>
							<textarea id='inputTaskContent' className='form-control' rows='3' placeholder='Task content' value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
						</div>
					</div>
					<div className='form-group'>
						<div className='col-sm-offset-1 col-sm-11'>
							<button type='submit' className='btn btn-primary'>Add</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	};
}