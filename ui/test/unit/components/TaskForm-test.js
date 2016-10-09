import {stub} from 'sinon';
import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import TaskForm from '../../../app/components/TaskForm';

describe('<TaskForm/>', function () {

	it('renders form with submit button to specify subject', () => {
		const taskForm = shallow(<TaskForm/>);

		expect(taskForm.find('input[type="content"]')).to.have.length(1);
		expect(taskForm.find('textarea')).to.have.length(1);
		expect(taskForm.find('button[type="submit"]')).to.have.length(1);
	});

	it('sets state when changing subject and content input', () => {
		const taskForm = shallow(<TaskForm/>);

		taskForm.find('input[type="content"]').simulate('change', {target: {value: 'Task subject'}});
		taskForm.find('textarea').simulate('change', {target: {value: 'Sample content'}});
		expect(taskForm.state('subject')).to.be.equal('Task subject');
		expect(taskForm.state('content')).to.be.equal('Sample content');
	});

	it('invokes onsubmit handler with non-empty form content', () => {
		var onSubmitStub = stub();
		const taskForm = mount(<TaskForm onTaskSubmit={onSubmitStub}/>);

		taskForm.find('input[type="content"]').simulate('change', {target: {value: 'Non empty value'}});
		taskForm.find('textarea').simulate('change', {target: {value: 'Sample content'}});
		taskForm.find('form').simulate('submit');

		expect(onSubmitStub.calledOnce).to.equal(true);
		expect(onSubmitStub.calledWithMatch({ subject: 'Non empty value', content: 'Sample content' })).to.equal(true);
	});

	it('does not invoke onsubmit handler when empty form content', () => {
		var onSubmitStub = stub();
		const taskForm = mount(<TaskForm onTaskSubmit={onSubmitStub}/>);
		taskForm.find('textarea').simulate('change', {target: {value: 'Sample content'}});

		taskForm.find('form').simulate('submit');

		expect(onSubmitStub.called).to.equal(false);
	});


});