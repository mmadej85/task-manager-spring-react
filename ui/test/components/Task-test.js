import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Task from '../../app/components/Task';

var jsdom = require('mocha-jsdom')

describe('<Task/>', function() {
	it('shows content within div tag', () => {
		const task = {'content' : 'first task'};
		expect(shallow(<Task task={task}/>).equals(<div className='task'>first task</div>)).to.equal(true)
	});


});