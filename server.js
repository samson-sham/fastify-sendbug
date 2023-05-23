const server = require('fastify')();
const path = require('path');
server.register(require('@fastify/static'), {
    root: path.join(__dirname, 'static'),
    preCompressed: true,
});
server.listen({port: 8000, host: '0.0.0.0'}, (err, address) => {
    if (err) return console.log("ERROR:", err);
    console.log("Server listening:", address);
});