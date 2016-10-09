const mockServerAdapter = require('./util/mockServer');
const randomstring = require('randomstring');

const testData = [{'id': randomstring.generate(), 'subject': 'first task', 'content': 'sample1'},
	{'id': randomstring.generate(), 'subject': 'second task', 'content': 'sample2'},
	{'id': randomstring.generate(), 'subject': 'third task', 'content': 'sample3'}];

module.exports = {

	before(browser) {
		console.log('Starting mock server on port 8080...');
		mockServerAdapter.start();
	},

	after(browser) {
		console.log('Stopping mock server...');
		mockServerAdapter.stop();
	},

	beforeEach(browser) {
		mockServerAdapter.setup(testData);
		browser.url('http://localhost:3000').waitForElementVisible('div.taskBox', 3000);
		browser.expect.element('div.task:nth-of-type(1)').text.to.equal('first task');
		browser.expect.element('div.task:nth-of-type(2)').text.to.equal('second task');
		browser.expect.element('div.task:nth-of-type(3)').text.to.equal('third task');
		browser.expect.element('div.task:nth-of-type(1) .taskContent').to.not.be.visible;
		browser.expect.element('div.task:nth-of-type(2) .taskContent').to.not.be.visible;
		browser.expect.element('div.task:nth-of-type(3) .taskContent').to.not.be.visible;
	},

	addNewTask(browser) {
		browser.setValue('input[type=content]', 'new task')
			.verify.valueContains('input[type=content]', 'new task')
			.setValue('textarea', 'sample content')
			.verify.valueContains('textarea', 'sample content')
			.click('button[type="submit"]');

		browser.expect.element('div.task:nth-of-type(4)').text.to.equal('new task');
		browser.expect.element('div.task:nth-of-type(4) .taskContent').to.not.be.visible;

		browser.click('div.task:nth-of-type(4) a');

		browser.expect.element('div.task:nth-of-type(4) .taskContent').to.be.visible;
		browser.expect.element('div.task:nth-of-type(4) .taskContent').text.to.equal('sample content')
		browser.end();
	},

	deleteExistingTask(browser) {
		browser.click('div.task:nth-of-type(2) button');

		browser.expect.element('div.task:nth-of-type(1)').text.to.equal('first task');
		browser.expect.element('div.task:nth-of-type(2)').text.to.equal('third task');
		browser.expect.element('div.task:nth-of-type(3)').to.not.be.present;
		browser.end();
	},

	showInitiallyHiddenContent(browser) {
		browser
			.click('div.task:nth-of-type(1) a')
			.click('div.task:nth-of-type(3) a');

		browser.expect.element('div.task:nth-of-type(1) .taskContent').to.be.visible;
		browser.expect.element('div.task:nth-of-type(1) .taskContent').text.to.equal('sample1');
		browser.expect.element('div.task:nth-of-type(2) .taskContent').to.not.be.visible;
		browser.expect.element('div.task:nth-of-type(3) .taskContent').to.be.visible;
		browser.expect.element('div.task:nth-of-type(3) .taskContent').text.to.equal('sample3');
		browser.end();
	}
};