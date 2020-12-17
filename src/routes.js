// API routes file
const express = require('express');

// Controllers
const CustomerController = require('./controllers/CustomerController');
const AuthController = require('./controllers/AuthController');
const FavoriteProducts = require('./controllers/FavoriteProductsController');

// auth middleware
const authMiddleware = require('./middlewares/authMiddleware');

const routes = express.Router();

routes.get('/', (req, res) => res.send('Produtos Favoritos API'))

// auth routes
routes.post('/api/customer/signup', AuthController.signup);
routes.post('/api/customer/login', AuthController.login);

// list of favorite products
routes.get('/api/customer/favorites/', authMiddleware, FavoriteProducts.getList);
routes.post('/api/customer/favorites/:productId', authMiddleware, FavoriteProducts.addProduct);

// customer routes
routes.get('/api/customer/:customerId', authMiddleware, CustomerController.getCustomer);
routes.put('/api/customer/:customerId', authMiddleware, CustomerController.updateCustomer);
routes.delete('/api/customer/:customerId', authMiddleware, CustomerController.deleteCustomer);

module.exports = routes;