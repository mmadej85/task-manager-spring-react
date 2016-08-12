import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";
import Task from "../app/components/Task";

var jsdom = require('mocha-jsdom')

describe("A Task tests suite", function() {
	it("has content within div", function() {
		let task = {"content" : "first task"};
		expect(shallow(<Task task={task}/>).equals(<div className="task">first task</div>)).to.equal(true)
	});
});