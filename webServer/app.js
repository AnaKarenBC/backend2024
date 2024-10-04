const http = require('http');
                                    //request, response
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(201);
    res.write('Hello Ana!');
    res.end();
});

server.listen(3000, '127.0.0.1');
console.log('Servidor web iniciado en http://127.0.0.1:3000')