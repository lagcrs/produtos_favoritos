// API routes file
const express = require('express');
const CustomerController = require('./controllers/CustomerController');
const AuthController = require('./controllers/AuthController');

const routes = express.Router();

routes.get('/', (req, res) => res.send('Produtos Favoritos API'))

// auth routes
routes.post('/api/customer/signup', AuthController.signup);
routes.post('/api/customer/login', AuthController.login);

// customer routes
routes.get('/api/customer/:customerId', CustomerController.getCustomer);
routes.put('/api/customer/:customerId', CustomerController.updateCustomer);
routes.delete('/api/customer/:customerId', CustomerController.deleteCustomer);

module.exports = routes;