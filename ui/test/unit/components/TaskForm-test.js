import {stub} from 'sinon';
import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import TaskForm from '../../../app/components/TaskForm';

describe('<TaskForm/>', function () {

	it('renders form with submit button to specify subject', () => {
		const taskForm = shallow(<TaskForm/>);

		expect(taskForm.find('input[type="content"]')).to.have.length(1);
		expect(taskForm.find('input[type="submit"]')).to.have.length(1);
	});

	it('sets state when changing subject input', () => {
		const taskForm = shallow(<TaskForm/>);

		taskForm.find('input[type="content"]').simulate('change', {target: {value: 'My new value'}});
		expect(taskForm.state('subject')).to.be.equal('My new value');
	});

	it('invokes onsubmit handler with non-empty form content', () => {
		var onSubmitStub = stub();
		const taskForm = mount(<TaskForm onTaskSubmit={onSubmitStub}/>);

		taskForm.find('input[type="content"]').simulate('change', {target: {value: 'Non empty value'}});
		taskForm.find('form').simulate('submit');

		expect(onSubmitStub.calledOnce).to.equal(true);
		expect(onSubmitStub.calledWithMatch({ subject: 'Non empty value' })).to.equal(true);
	});

	it('does not invoke onsubmit handler when empty form content', () => {
		var onSubmitStub = stub();
		const taskForm = mount(<TaskForm onTaskSubmit={onSubmitStub}/>);

		taskForm.find('form').simulate('submit');

		expect(onSubmitStub.called).to.equal(false);
	});


});