// Customer Controller file
const bcrypt = require('bcryptjs')
const Customer = require('../models/Customer');

module.exports = {
    async signup(req, res) {
        const { name, email, password } = req.body;

        try {
            // check if email already exists or not
            if (await Customer.findOne({ email })) {
                return res.status(400).send({ error: 'User already exists' })
            }

            // add new customer
            const newCustomer = await Customer.create({
                name,
                email,
                password
            });

            newCustomer.password = undefined;

            return res.send(newCustomer)
            
        } catch(err) {
            res.status(400).send({error: 'Error to register'})
        }
    },

    async getCustomer(req, res){
        const { customerId } = req.params;

        try {
            const customer = await Customer.findById(customerId);

            return res.status(200).send({ message: 'Customer fetched', customer:  customer})

        } catch (err) {
            res.status(500).send({error: 'Failed to get customer.'})
        }
    },

    async updateCustomer(req, res) {
        const { customerId } = req.params;
        const { name, email, password } = req.body;

        try {
            const customer = await Customer.findById(customerId).select('+password')
            console.log(customer)

            customer.name = name;
            customer.email = email;

            const hash = await bcrypt.hash(password, 10);
            customer.password = hash;

            await customer.save();

            return res.status(200).send({ message: 'Customer update!'});

        } catch(err) {
            console.log(err)
            res.status(500).send({error: 'Failed to update customer.'})
        }
    },

    async deleteCustomer(req, res) {
        const { customerId }  = req.params;

        try {
            // find by id the customer and delete
            await Customer.findByIdAndDelete(customerId);

            return res.status(200).send({ message: 'Customer deleted.' })

        } catch(err) {
           res.status(500).send({error: 'Failed to delete customer.'})
        }
    }
}