// API routes file
const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => res.send('Produtos Favoritos API'))

module.exports = routes;