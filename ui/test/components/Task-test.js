import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Task from '../../app/components/Task';

var jsdom = require('mocha-jsdom')

describe('<Task/>', function() {
	it('shows subject without content', () => {
		const taskJson = {'subject' : 'first task', 'content': 'sample content'};
		const task = shallow(<Task task={taskJson}/>);
		expect(task.contains('first task')).to.equal(true);
		expect(task.contains('sample content')).to.equal(false)
	});
});