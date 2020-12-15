// Auth Controller file
const Customer = require('../models/Customer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = {
    async signup(req, res) {
        // get fields from body request
        const { name, email, password } = req.body;

        try {
            // check if email already exists
            if (await Customer.findOne({ email })) {
                return res.status(400).send({ error: 'User already exists' })
            }

            // add new customer
            const newCustomer = await Customer.create({
                name,
                email,
                password
            });
            
            // undefined to not show the password on the response
            newCustomer.password = undefined;

            return res.send(newCustomer)
            
        } catch(err) {
            res.status(400).send({error: 'Error to register'})
        }
    },

    async login(req, res){
        // get fields from body request
        const { email, password } = req.body;

        // find user(customer) by email
        const user = await Customer.findOne( { email } ).select('+password');

        // verify with user exists
        if(!user) return res.status(401).send({ error: 'User not found' });

        // compare req.body password with hash password of database using bcrypt, if invalid return 401 status
        if(!await bcrypt.compare(password, user.password)) return res.status(401).send({ error: 'Invalid password' });

        // undefined to not show the password on the response
        user.password = undefined;

        res.send({
            user: user.email,
            // generate token
            token: jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        });
    }
}