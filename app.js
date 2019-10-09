const http = require('http');
const requestHandler = require('./routes/routes');

const server = http.createServer(requestHandler);

const PORT = process.env.PORT || 3000;
server.listen(PORT);
  