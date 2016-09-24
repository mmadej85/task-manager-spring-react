var mockServer = require('./util/mockServer');

module.exports = {
    before(browser) {
        console.log('Starting mock server on port 8080...');
        mockServer.start();
    },

    after(browser) {
        console.log('Stopping mock server...');
        mockServer.stop();
    },
    
    addNewTask(browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('div.taskBox', 3000)
            .assert.containsText('div.tasklist a:nth-of-type(1)', 'first task')
            .assert.containsText('div.tasklist a:nth-of-type(2)', 'second task')
            .assert.containsText('div.tasklist a:nth-of-type(3)', 'third task')
            .setValue('input[type=content]', 'new task')
            .verify.valueContains('input[type=content]', 'new task')
            .submitForm('form.taskForm')
            .assert.containsText('div.tasklist a:nth-of-type(4)', 'new task')
            .end();
    }
};