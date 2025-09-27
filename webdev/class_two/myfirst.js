let http = require('http'); 
// "let" is used to define variables. 
// "Require" will load a module, in this case, the 'http' modules is loaded

function greetUser(req, res) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('Hello World!');
}

http.createServer(greetUser).listen(8080);
