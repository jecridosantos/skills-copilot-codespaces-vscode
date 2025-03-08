// Create web server
// Create a web server that listens to requests on port 3000. When a request is made to the server, it should respond with the contents of the comments.json file and a status code of 200. If the file is not found, it should respond with a status code of 404.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.json', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});