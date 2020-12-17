// Customer Controller file
const bcrypt = require('bcryptjs')
const Customer = require('../models/Customer');

module.exports = {

    async getCustomer(req, res){
        // get id customer from request params and user id from request
        const { customerId } = req.params;
        const userId = req.userId;

        try {
            // find by id the customer from req
            const customer = await Customer.findById(customerId);

            // verify if customerId is the userId logged. The user logged can only see yourself
            if(customerId !== userId){ 
                return res.status(401).send({error: 'Not Authorized.' });
            }

            // return success massage
            return res.status(200).send({ message: 'Customer fetched.', customer:  customer})

        } catch (error) {
            res.status(500).send({error: 'Failed to get customer.'})
        }
    },

    async updateCustomer(req, res) {
        // get fields from request
        const { customerId } = req.params;
        const userId = req.userId;
        const { name, email, password } = req.body;

        try {
            // find by id the customer with your password selected
            const customer = await Customer.findById(customerId).select('+password');

            // verify if customerId is the userId logged. The user logged can only see yourself
            if(customerId !== userId){ 
                return res.status(401).send({error: 'Not Authorized.' });
            }

            // update fields name and email
            customer.name = name;
            customer.email = email;

            // hash for the new password
            const hash = await bcrypt.hash(password, 10);
            // update new hash password
            customer.password = hash;

            //save all the fields updated
            await customer.save();

            // return success massage
            return res.status(200).send({ message: 'Customer update!'});

        } catch(error) {
            // return message error if falid to update customer
            res.status(500).send({error: 'Failed to update customer.'})
        }
    },

    async deleteCustomer(req, res) {
        // get customerId from request
        const { customerId }  = req.params;
        const userId = req.userId;

        try {

            // verify if customerId is the userId logged. The user logged can only see yourself
            if(customerId !== userId){ 
                return res.status(401).send({error: 'Not Authorized.' });
            }

            // find by id the customer and delete
            await Customer.findByIdAndDelete(customerId);

            // return success massage
            return res.status(200).send({ message: 'Customer deleted.' })

        } catch(error) {
            // return message error if falid to update customer
           res.status(500).send({error: 'Failed to delete customer.'})
        }
    }
}