const express = require('express');
const cors = require('cors');
const server = express();
const routes = require('./routes');

// midlewares
server.use(cors());
server.use(express.json());
// routes
server.use(routes);
// server
server.listen(3333, () => {
    console.log('SERVER ON')
})