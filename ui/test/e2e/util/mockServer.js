const Hapi = require('hapi');
const randomstring = require('randomstring');

const server = new Hapi.Server();

exports = module.exports = server;
server.connection({port: 8080});

var data = [{'id': randomstring.generate(), 'subject': 'first task', 'content': 'sample1'},
    {'id': randomstring.generate(), 'subject': 'second task', 'content': 'sample2'},
    {'id': randomstring.generate(), 'subject': 'third task', 'content': 'sample3'}];

server.route({
    method: 'GET',
    path: '/api/tasks',
    handler(request, reply) {
        reply(data);
    }
});

server.route({
    method: 'POST',
    path: '/api/tasks',
    handler(request, reply) {
        const task = {
            'id': randomstring.generate(),
            'subject': request.payload.subject,
            'content': request.payload.content
        };
        data.push(task);
        reply(task);
    }
});
server.route({
    method: 'DELETE',
    path: '/api/tasks/{taskId}',
    handler(request, reply) {
        var taskId = request.params.taskId;
        data = data.filter((item) => item.id != taskId);
        reply(data);
    }
});