import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Task from '../../../app/components/Task';
import TaskList from '../../../app/components/TaskList';

describe('<TaskList/>', function () {

	it('renders two tasks', () => {
		const tasksJson = [{'id': '1', 'content': 'first task'}, {'id': 2, 'content': 'second task'}];
		const taskList = shallow(<TaskList tasks={tasksJson}/>);
		expect(taskList.find(Task)).to.have.length(2);
	});


});