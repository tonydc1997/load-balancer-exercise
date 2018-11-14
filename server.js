const os = require('os');
const http = require('http');

const server = http.createServer(function (request, response) {
  if (request.url === '/favicon.ico') {
    response.writeHead(200, {
      'Content-Type': 'image/x-icon',
    });
    response.end();
    console.log('favicon requested');
    return;
  }

  response.writeHead(200, {
    'Content-Type': 'application/json',
  });
  console.log('This endpoint has been hit');
  response.end(JSON.stringify({
    message: request.connection.remoteAddress,
    net: os.networkInterfaces(),
  }));
});
