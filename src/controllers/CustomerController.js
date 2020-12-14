// Customer Controller file
const bcrypt = require('bcryptjs')
const Customer = require('../models/Customer');

module.exports = {

    async getCustomer(req, res){
        // get id customer from request params
        const { customerId } = req.params;

        try {
            // find by id the customer from req
            const customer = await Customer.findById(customerId);

            return res.status(200).send({ message: 'Customer fetched', customer:  customer})

        } catch (err) {
            res.status(500).send({error: 'Failed to get customer.'})
        }
    },

    async updateCustomer(req, res) {
        // get fields from request
        const { customerId } = req.params;
        const { name, email, password } = req.body;

        try {
            // find by id the customer with your password selected
            const customer = await Customer.findById(customerId).select('+password')

            // update fields name and email
            customer.name = name;
            customer.email = email;

            // hash for the new password
            const hash = await bcrypt.hash(password, 10);
            // update new hash password
            customer.password = hash;

            //save all the fields updated
            await customer.save();

            return res.status(200).send({ message: 'Customer update!'});

        } catch(err) {
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