var fs = require('fs');//wymagany moduł fs
var http = require('http'); //wymagany moduł http

var server = http.createServer();

server.on('request', function(request, response) {
    response.setHeader("Contet-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {//wyświetlenie na zapytanie na url  !odpowiednie nagłówki
       fs.readFile('index.html', 'utf-8', function(err, html) { //zczytywanie pliku index.html
            console.log("Zczytuje plik index.html");
            response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            response.write(html);
            response.end();
        });
    } else { //w innym przypadku wyświetl dowolny obrazek z info o 404
            response.statusCode = 404;
            response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            response.write('<body><img src="https://img00.deviantart.net/248d/i/2013/216/6/8/coffee_404_by_thanshuhai-d6gnw79.png" /> </body>');
            response.write('<a href="/">Wróć na stronę główną</a>')
            console.log("Błędny katalog");
            response.end();
        }
})
server.listen(8080);

