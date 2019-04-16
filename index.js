//Semplice web server
//Modulo HTTP
const http = require('http');

//Comportamento er server con callback
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Ciao mondo!');
    res.end();
})

//In ascolto
//server.listen(porta, url);
server.listen(8081, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8081/');