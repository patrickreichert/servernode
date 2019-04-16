//Semplice web server
//Modulo HTTP
const http = require('http');
const port = 7070;

//Comportamento er server con callback
const server = http.createServer(function (request, response) {
    console.log(request.url)
    if (request.url === '/')
    {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1> Home </h1>');
        response.end();
    }
    else if (request.url === '/api')
         {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(JSON.stringify(
                {
                    "version": "0.1",
                    "nome": "Mia API personale",
                    "data": "2019-04-16"
                }
            ));
            response.end();
         }
         else
         {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(`<h1> ${request.url} </h1>`);
            response.end();
         }
})

//In ascolto
//server.listen(porta, url);
server.listen(port, '127.0.0.1');
//apici particolari -> ``
console.log(`Server running at http://127.0.0.1:${port}`);