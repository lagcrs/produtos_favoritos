// API routes file
const express = require('express');
const CustomersController = require('./controllers/CustomersController');

const routes = express.Router();

routes.get('/', (req, res) => res.send('Produtos Favoritos API'))
routes.post('/api/customer/signup', CustomersController.signup);

routes.get('/api/customer/:customerId', CustomersController.getCustomer);
routes.put('/api/customer/:customerId', CustomersController.updateCustomer);
routes.delete('/api/customer/:customerId', CustomersController.deleteCustomer);

module.exports = routes;