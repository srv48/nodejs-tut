const http = require('http')
const route = require('./route')

// const requestListener = function (request, response) {

// };
// http.createServer(requestListener);

const server = http.createServer(route.handler);
server.listen(8000);