const Hapi = require('hapi');
const randomstring = require('randomstring');

const server = new Hapi.Server();

var serverWrapper = {
    data: [],
    server,

    start(){
        server.connection({port: 8080});

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
        server.start();
    },

    setup(newData){
        data = JSON.parse(JSON.stringify(newData)); //cloning newData
    },
    
    stop(){
        server.stop();
    }
};

exports = module.exports = serverWrapper;
