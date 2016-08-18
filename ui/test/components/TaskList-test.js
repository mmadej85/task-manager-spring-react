import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import {spy, stub} from 'sinon';
import Task from '../../app/components/Task';
import TaskList from '../../app/components/TaskList';
import {CONFIG} from '../../app/constants/constants';
import * as server from '../../app/core/task-server';

describe('<TaskList/>', function () {

	before(() => {
		stub(server, 'getAllTasks');
	});

	after(() => {
		server.getAllTasks.restore();
	});

	it('renders two tasks', () => {
		const taskList = shallow(<TaskList/>);
		taskList.setState({tasks: [{'id': '1', 'content': 'first task'}, {'id': 2, 'content': 'second task'}]});
		expect(taskList.find(Task)).to.have.length(2);
	});

	it('calls server to retrieve tasks', () => {
		mount(<TaskList/>);
		expect(server.getAllTasks.calledOnce).to.equal(true);
	});

	it('schedules periodic retrieval of tasks from the server', () => {
		const setInterval = spy(global, 'setInterval');
		mount(<TaskList/>);
		expect(setInterval.withArgs(server.getAllTasks,
			CONFIG.defaultFetchInterval).calledOnce).to.equal(true);
		setInterval.restore();
	});


});