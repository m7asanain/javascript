const http = require('http');

const serve = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.write('<h1>Hello There!</h1>');
  response.end();
});

serve.listen(3000);