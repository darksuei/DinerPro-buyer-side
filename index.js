const express = require('express');
const next = require('next');
require('dotenv').config();

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

server.all('*', (req, res) => {
    return handle(req, res);
  });

app.prepare().then(() => {
server.listen(3000, () => {
    console.log('Express server listening on port 3000');
});
});