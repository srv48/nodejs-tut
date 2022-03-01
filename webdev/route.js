
const handleRequest = (request, response) => {

    const url = request.url;
    const method = request.method;
    if (url === '/') {
        response.write('<html>');
        response.write('<head><title>Ener message</title></head>');
        response.write('<body><form action="/process" method="POST"><input type="text" name="message"><button type="submit">Send!</button></form></body>');
        response.write('</html>');
        return response.end();
    }
    if (url === '/process' && method === 'POST') {
        const data = []
        request.on('data', (chunks) => {
            data.push(chunks);
            console.log(chunks);
        });
        request.on('end', () => {
            const parsedData = Buffer.concat(data).toString();
            console.log(parsedData);
            response.statusCode = 302;
            response.setHeader('Location', '/');
            return response.end();
        });
        // response.statusCode = 302;
        // response.setHeader('Contnt-Type', 'text/html');

    };
};

module.exports = {
    handler: handleRequest
};