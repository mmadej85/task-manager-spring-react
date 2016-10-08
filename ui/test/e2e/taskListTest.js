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
        browser.url('http://localhost:3000').waitForElementVisible('div.taskBox', 3000)
            .assert.containsText('div.task:nth-of-type(1)', 'first task')
            .assert.containsText('div.task:nth-of-type(2)', 'second task')
            .assert.containsText('div.task:nth-of-type(3)', 'third task')
    },

    addNewTask(browser) {
        browser
            .setValue('input[type=content]', 'new task')
            .verify.valueContains('input[type=content]', 'new task')
            .submitForm('form.taskForm')
            .assert.containsText('div.task:nth-of-type(4)', 'new task')
            .end();
    },

    deleteExistingTask(browser) {
        browser
            .click('div.task:nth-of-type(2) button')
            .assert.containsText('div.task:nth-of-type(1)', 'first task')
            .assert.containsText('div.task:nth-of-type(2)', 'third task')
            .assert.elementNotPresent('div.task:nth-of-type(3)')
            .end();
    },

    showInitiallyHiddenContent(browser) {
        browser
            .assert.hidden('#taskContent_' + testData[0].id)
            .assert.hidden('#taskContent_' + testData[1].id)
            .assert.hidden('#taskContent_' + testData[2].id)
            .click('div.task:nth-of-type(1) a')
            .click('div.task:nth-of-type(3) a')
            .assert.visible('#taskContent_' + testData[0].id)
            .assert.hidden('#taskContent_' + testData[1].id)
            .assert.visible('#taskContent_' + testData[2].id)
            .end();
    }
};