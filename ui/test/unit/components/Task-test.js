import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Task from '../../../app/components/Task';

describe('<Task/>', function() {
	it('renders html with subject and content', () => {
		const taskJson = {'subject' : 'first task', 'content': 'sample content', 'id': '321'};
		const task = shallow(<Task task={taskJson}/>);
		expect(task.contains('first task')).to.equal(true);
		expect(task.contains('sample content')).to.equal(true)
	});
});